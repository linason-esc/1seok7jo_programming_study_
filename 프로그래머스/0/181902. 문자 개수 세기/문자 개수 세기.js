function solution(my_string) {
    // 길이 52의 배열을 0으로 초기화
    let allAlphabet = Array(52).fill(0);

    // 주어진 문자열을 한 글자씩 순회
    for (let char of my_string) {
        let ascii = char.charCodeAt(0); // 각 문자의 아스키 코드 값

        // 대문자 'A' ~ 'Z'는 배열의 0 ~ 25 인덱스에 해당
        if (ascii >= 65 && ascii <= 90) {
            allAlphabet[ascii - 65]++;
        }
        // 소문자 'a' ~ 'z'는 배열의 26 ~ 51 인덱스에 해당
        else if (ascii >= 97 && ascii <= 122) {
            allAlphabet[ascii - 71]++; // 97 - 26 = 71
        }
    }

    return allAlphabet;
}
