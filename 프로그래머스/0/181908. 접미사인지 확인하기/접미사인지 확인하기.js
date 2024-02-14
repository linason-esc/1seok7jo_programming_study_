function solution(my_string, is_suffix) {
    let splitString = [];
    
    for(i=0; i<my_string.length; i++) {
        splitting = my_string.slice(i);
        splitString.push(splitting);
}
    console.log(splitString);
    if(splitString.includes(is_suffix)) return 1;
    else return 0;
}