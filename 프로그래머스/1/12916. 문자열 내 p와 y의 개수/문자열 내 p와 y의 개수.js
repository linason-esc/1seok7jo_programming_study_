function solution(s){
    let newString = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    
    for(i=0; i < newString.length; i++) {
        if (newString[i] === 'p') {
            pCount++;
        } else if (newString[i] === 'y') {
            yCount++;
        }
    }
    
    if (pCount === 0 && yCount === 0) return true;
    return pCount === yCount ? true : false;
}