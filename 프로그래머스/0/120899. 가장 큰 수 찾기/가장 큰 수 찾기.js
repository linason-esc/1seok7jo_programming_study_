function solution(array) {
    let answer = [];
    let maxNum = Math.max(...array);
    
    answer.push(maxNum);
    
    for (i=0; i<array.length; i++) {
        if (array[i] === maxNum) {
            answer.push(i);
        }
    }
    return answer;
}