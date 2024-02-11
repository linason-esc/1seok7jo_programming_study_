function solution(phone_number) {
    let splitBack = [...phone_number].reverse().slice(0,4);
    let splitFront = [...phone_number].reverse().slice(4);
    let replaceStar = splitFront.join('').replaceAll(/[0-9]/g, '*');
    //console.log(splitBack);
    //console.log(splitFront);
    //console.log(replaceStar);
    return answer = replaceStar + splitBack.reverse().join('');
}

function solution(phone_number) {
    let splitBack = [...phone_number].slice(-4);
    //console.log(splitBack);
    l = phone_number.length - 4;
    let splitFront = [...phone_number].slice(0, l).fill('*');
    //console.log(splitFront);
    return answer = splitFront.join('') + splitBack.join('');
}

