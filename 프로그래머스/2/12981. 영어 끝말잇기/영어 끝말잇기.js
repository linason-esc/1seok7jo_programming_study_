function solution(n, words) {
    let usedWords = new Set();
    let previousWord = words[0];
    
    usedWords.add(previousWord);
    
    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        let player = (i % n) + 1;
        let turn = Math.floor(i / n) + 1;
        
        if (usedWords.has(currentWord) || previousWord[previousWord.length - 1] !== currentWord[0]) {
            return [player, turn];
        }
        
        usedWords.add(currentWord);
        previousWord = currentWord;
    }
    
    return [0, 0];
}