function solution(n) {
    //(n-1)의 약수들 중에서 1을 제외한 약수들 중에서 제일 작은 약수를 찾으면 됨
    let ok_numbers = [];
    
    for(i=1; i<n+1; i++) {
        if((n-1)%i === 0) {
            ok_numbers.push(i);
        }
    } console.log(ok_numbers);
    return ok_numbers[1];
}