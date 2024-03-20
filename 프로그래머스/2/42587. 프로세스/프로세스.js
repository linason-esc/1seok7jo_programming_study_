function solution(priorities, location) {
    let answer = 0;
    let locate_arr = []
    let max_priority = Math.max(...priorities);

    //위치 배열 만들기
    for(let i = 0; i < priorities.length; i++){
        locate_arr.push(i);
    }

   //priorities 배열이 비어있을 때까지 반복
    while(priorities.length){
         max_priority = Math.max(...priorities);
        
        if(priorities[0] < max_priority){
            priorities.push(priorities.shift());
            locate_arr.push(locate_arr.shift());
        }else {
            answer+=1;
            priorities.shift();
            if(locate_arr.shift() == location)
                return answer;
        }
    }
}