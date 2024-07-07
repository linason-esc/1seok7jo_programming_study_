function solution(arr) {
    // 배열이 빈 배열인 경우 -1을 리턴
    if (arr.length === 1) {
        return [-1];
    }

    // 가장 작은 수 찾기
    let minValue = Math.min(...arr);

    // 가장 작은 수를 제거한 새로운 배열 생성
    let result = arr.filter(value => value !== minValue);

    return result;
}
