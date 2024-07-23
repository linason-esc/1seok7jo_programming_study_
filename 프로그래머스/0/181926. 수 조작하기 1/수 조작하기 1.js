function solution(n, control) {
    
    let controlArray = [...control];
    console.log(controlArray);
    
    for (i=0; i<controlArray.length; i++) {
        if (controlArray[i] === 'w') {
            n += 1;
        } else if (controlArray[i] === 's') {
            n -= 1;
        } else if (controlArray[i] === 'd') {
            n += 10;
        } else if (controlArray[i] === 'a') {
            n -= 10;
        }
    }
    
    return n;

}