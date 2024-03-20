function solution(arr, k) {
    const result = [];
    const seen = new Set();

    for (let num of arr) {
        if (!seen.has(num)) {
            seen.add(num);
            result.push(num);
            if (result.length === k) break;
        }
    }

    // 결과 배열의 길이가 k보다 작은 경우, -1로 채운다.
    while (result.length < k) {
        result.push(-1);
    }

    return result;
}
