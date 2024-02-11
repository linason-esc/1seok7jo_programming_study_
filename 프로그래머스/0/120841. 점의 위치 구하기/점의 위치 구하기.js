//using if
function solution(dot) {
    const x = dot[0];
    const y = dot[1];
    
    if (x>0 && y>0) {
        return 1;
    } else if (x<0 && y>0) {
        return 2;
    } else if (x<0 && y<0) {
        return 3;
    } else if (x>0 && y<0) {
        return 4;
    }
}

//using ternary operator
function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}