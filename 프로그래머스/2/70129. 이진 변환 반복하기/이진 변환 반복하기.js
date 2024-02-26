function solution(s) {
    let count = 0; // 이진 변환 횟수
    let removedZeros = 0; // 제거된 0의 개수

    while (s !== "1") {
        let lengthBefore = s.length; //5
        // 모든 0을 제거하고, 제거된 0의 개수를 센다
        s = s.replace(/0/g, ""); //"111"
        let lengthAfter = s.length; //3
        removedZeros += lengthBefore - lengthAfter; //2

        // 남은 문자열의 길이를 2진수로 변환
        s = lengthAfter.toString(2);
        count += 1;
    }

    return [count, removedZeros];
}
