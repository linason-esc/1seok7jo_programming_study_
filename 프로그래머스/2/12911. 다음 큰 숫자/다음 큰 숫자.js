function solution(n) {
    let arr = n.toString(2).split(''); // 2진법으로 변환해 배열 만들기
    
    let cnt = arr.filter((one)=>one==='1').length; // 1의 개수 세기
    let cnt2;
    
    while(cnt!==cnt2){ //cnt와 cnt2의 크기가 같을 때 종료
        ++n; // 다음 큰 숫자
        cnt2 = n.toString(2).split('').filter((one)=>one==='1').length; // 1의 개수 세기
    }
    return n;
}