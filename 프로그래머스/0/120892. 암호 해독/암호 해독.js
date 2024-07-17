function solution(cipher, code) {
    let answer = '';
    
    for (i=0; i<cipher.length; i++) {
        if ((i+1) % code === 0) {
            answer += cipher[i];
        }
    }
    return answer;
}

function solution(cipher, code) {
    return [...cipher].reduce((acc, element, index) => 
    (index+1) % code === 0 ? acc + cipher[index] : acc, '');
}