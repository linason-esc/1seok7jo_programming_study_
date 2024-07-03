function solution(k, tangerine) {
    // 크기별 귤의 개수를 센다
    const countMap = new Map();
    for (let size of tangerine) {
        // 현재 크기의 귤 개수를 가져와 1을 더하고, 없으면 0에서 시작해 1을 더한다
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    // 개수를 기준으로 내림차순 정렬한다
    const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);

    let total = 0;
    let varietyCount = 0;

    // 가장 많은 귤부터 차례로 선택하면서 k개를 채운다
    for (let count of sortedCounts) {
        total += count;  // 현재까지 선택한 귤의 총 개수에 현재 귤의 개수를 더한다
        varietyCount += 1;  // 사용한 귤의 종류 수를 하나 증가시킨다
        if (total >= k) {
            break;  // 선택한 귤의 개수가 k개 이상이면 반복을 멈춘다
        }
    }

    return varietyCount;  // 최소 귤 종류 수를 반환한다
}