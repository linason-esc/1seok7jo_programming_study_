function solution(polynomial) {
    let xSum = 0;
    let constantSum = 0;
    
    // +를 기준으로 분리
    const terms = polynomial.split(' + ');
    
    terms.forEach(term => {
        // x가 포함된 항 처리
        if (term.includes('x')) {
            // x의 계수를 추출
            let coefficient = term.replace('x', '');
            // 'x' 단독인 경우 계수는 1
            if (coefficient === '') {
                coefficient = 1;
            }
            xSum += parseInt(coefficient);
        } else {
            // 상수항 처리
            constantSum += parseInt(term);
        }
    });
    
    // 결과 문자열 생성
    let result = [];
    if (xSum !== 0) {
        result.push(xSum === 1 ? 'x' : xSum + 'x');
    }
    if (constantSum !== 0) {
        result.push(constantSum.toString());
    }
    
    return result.join(' + ');
}