function solution(x) {
    let isHarshad = true;
    let sum = 0;
    
    let X = [...String(x)];
    //console.log(X); ['1', '2']
    
    for(i=0; i<X.length; i++) {
        sum += Number(X[i]);
        
        if(x % sum === 0) {
            isHarshad = true;
        } else isHarshad = false;
    }
    
    return isHarshad;
}