function solution(s) {
    const S = [...s];
    // console.log(S); [ 'a', 'b', 'c', 'd', 'e' ]
    
    if (S.length % 2 === 0) {
        return S[Math.floor(S.length/2)-1] + S[Math.floor(S.length/2)];
    } else return S[Math.floor(S.length/2)];
}