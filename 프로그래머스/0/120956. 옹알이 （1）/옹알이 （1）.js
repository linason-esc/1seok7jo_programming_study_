function solution(babbling) {
    let count = 0;
    let babyWord = ["aya", "ye", "woo", "ma"];
    
    for(i=0; i<babbling.length; i++) {
        for (b of babyWord) {
            if (babbling[i].includes(b)) {
                babbling[i] = babbling[i].replaceAll(b, " ");
            }
        } 
    } //console.log(babbling); //	[ '  ', 'uuu ', ' ', '   ', ' a' ]
    
    for(i=0; i<babbling.length; i++) {
        babbling[i] = babbling[i].trim();
        if (babbling[i] === "") count++;
    } //console.log(babbling); //[ '', 'uuu', '', '', 'a' ]
    
    return count;
}