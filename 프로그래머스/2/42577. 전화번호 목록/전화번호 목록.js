function solution(phone_book) {
    let hash = new Map();
    let answer = true;

       phone_book.forEach(e=> {
        hash.set(e, '');
    })
    // console.log(hash);
    
    for(let [key, value] of hash) {
        for(let i=1; i<key.length; i++) {
            let pre = key.slice(0, i);
            // console.log(pre);

            // 접두어를 확인하기 위한 문자열 자르는데 최소한의 길이는 1이 필요
            // 해당 접두어가 해시에 존재하면 early return
            if(hash.has(pre)) {
                return false;
            }
        }
    }

    return answer;
}