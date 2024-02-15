function solution(s) {
    
    let changeToNumber = Number(s);
    //console.log(s.split(""));
   
    console.log(changeToNumber);
    //console.log(Boolean(changeToNumber+1));
    //console.log(typeof(changeToNumber+1));
    
    if(!(s.includes('e') || s.includes('x')) 
       && (s.length === 4 || s.length === 6)) {
        
        if(Number.isInteger(changeToNumber) === true) return true;
        else if(Number.isInteger(changeToNumber) === false) return false;
        
    } else return false;
    
    /*if(isNaN(changeToNumber) === true) return false;
        else if(isNaN(changeToNumber) === false) return true;
    } else return false;*/
}


function solution(s) {

    if(s.length === 4 || s.length === 6){
        return s.split("").every(e => !isNaN(e)) // 모든 요소가 number이면 true리턴
    } else {
        return false;
    }
}