function solution(s, n) {
    let answer = '';
    
    for (i=0; i<s.length; i++) {
        //공백 처리
        if (s[i] === " ") {
            answer += " ";
        }
        //공백 아닐때
        else {
            let sCode = s.charCodeAt(i);
            
            //대문자일때
            if (sCode <= 90) {
                sCode += n;
                
                // Z 예외 처리
                if (sCode > 90) {
                    sCode -= 26;
                }
            //소문자일때
            } else  {
                sCode += n;
                
                // z 예외 처리
                if (sCode > 122) {
                    sCode -= 26;
                }
            }
             answer += String.fromCharCode(sCode);
        }
        
    }
    return answer;
}