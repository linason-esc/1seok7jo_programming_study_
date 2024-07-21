function solution(spell, dic) {
    // spell 배열의 문자를 정렬하여 문자열로 변환
    const sortedSpell = spell.sort().join('');
    
    // dic 배열의 각 단어에 대해 검사
    for (let word of dic) {
        // 단어를 정렬하여 spell과 비교
        if (word.split('').sort().join('') === sortedSpell) {
            return 1;
        }
    }
    return 2;
}