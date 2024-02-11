function solution(arr, divisor) {
    let answer = [];
    
    answer = arr.filter((e) => e % divisor === 0);
    if (!answer.length) return [-1];
    
    return answer.sort((a,b) => a-b);
}