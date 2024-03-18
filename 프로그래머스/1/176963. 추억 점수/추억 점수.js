function solution(name, yearning, photo) {
    let answer = [];
    
    for(let p of photo) {
        let score = 0;
        for (let i=0; i<name.length; i++) {
            if (p.includes(name[i])) {
                score += yearning[i];
            }
        }
        answer.push(score);
    }
    return answer;
}