function solution(score) {
    let rank = new Array(score.length);
    let average = [];
    
    // 평균 점수 계산
    for (let i = 0; i < score.length; i++) {
        let sum = 0;
        for (let j = 0; j < score[i].length; j++) {
            sum += score[i][j];
        }
        average.push([sum / 2, i]); // 평균 점수와 원래 인덱스를 함께 저장
    }
    
    console.log(average); // 예: [[75, 0], [70, 1], [55, 2], [65, 3]]

    // 평균 점수를 내림차순으로 정렬
    average.sort((a, b) => b[0] - a[0]);
    
    // 등수 계산
    let currentRank = 1;
    for (let i = 0; i < average.length; i++) {
        if (i > 0 && average[i][0] < average[i - 1][0]) {
            currentRank = i + 1;
        }
        rank[average[i][1]] = currentRank;
    }

    return rank;
}