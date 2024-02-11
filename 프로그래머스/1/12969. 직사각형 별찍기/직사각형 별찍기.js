process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //console.log(a);
    //console.log(b);
    
    let string = '';
    for(i=0; i<a; i++) {
        string += '*';
    } for(j=1; j<b+1; j++) {
        console.log(string);
    } 
});