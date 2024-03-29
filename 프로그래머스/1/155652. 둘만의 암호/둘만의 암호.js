function solution(s, skip, index) {
    //1. skip에 포함되는 알파벳은 s에 포함되지 않습니다. 
    //-> filter로 skip에 있는 알파벳을 제외한, 새로운 알파벳 배열 생성
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].filter(a => !skip.includes(a));   
    
    //2.현재 알파벳 인덱스에 index만큼 더해줌
    return s.split("").map((a) => alpha[(alpha.indexOf(a) + index) % alpha.length]).join("");
}