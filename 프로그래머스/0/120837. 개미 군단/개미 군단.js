function solution(hp) {
    let general = Math.floor(hp/5);
    let soldier = Math.floor(hp%5/3);
    let worker = Math.floor(hp%5%3);
    return answer = general + soldier + worker;
}