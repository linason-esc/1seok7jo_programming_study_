function solution(todo_list, finished) {
    let answer = [];
    
        for(j=0; j<finished.length; j++) {
            if(finished[j] === false) {
                answer.push(todo_list[j]);
            }
    }
    
    return answer;
}