function solution(absolutes, signs) {
    let ans = [];
    let sum = 0;
    
    for(i=0; i<signs.length; i++){
        if(signs[i] === true) {
ans.push('+' + String(absolutes[i]));
} else {
    ans.push('-' + String(absolutes[i]));
}
}
    console.log(ans); //[ '+4', '-7', '+12' ]
    
    for(i=0; i<ans.length; i++) {
        sum += Number(ans[i]);
}
    return sum;
}