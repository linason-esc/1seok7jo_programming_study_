function solution(s) {
    
    let changeToNumber = Number(s);
    //console.log(s);
   
    console.log(changeToNumber+1);
    //console.log(Boolean(changeToNumber+1));
    //console.log(typeof(changeToNumber+1));
    
    if(!(s.includes('e') || s.includes('x')) 
       && (s.length === 4 || s.length === 6)) {
        if(Number.isInteger(changeToNumber) === true) return true;
        else if(Number.isInteger(changeToNumber) === false) return false;
    } else return false;
    
    
    
  /* for(i=0; i<s.length; i++) {
        if(typeof([i]) === 'number') {
            return true;
            
        //console.log(typeof(Number("a")));
        
        } else return false;
    }*/
}