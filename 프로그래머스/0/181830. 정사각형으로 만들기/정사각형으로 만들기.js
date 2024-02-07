function solution(arr) {
    let rows = arr.length;
    let columns = arr[0].length;
    let answer = [...arr];
    
        if(rows < columns) {
            for (let i=0; i<columns-rows; i++) {
            answer.push(Array(columns).fill(0));
            }
        }
        if(rows > columns) {
            for (let i=0; i<rows; i++) {
                for (let j=0; j<rows-columns; j++) {
                answer[i].push(0);
            }
        }
    }
    //console.log(Array(4).fill(0));
    return answer;
}