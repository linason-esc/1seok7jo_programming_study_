// people 배열을 가벼운 사람부터 순차적으로 정렬한다.
// 제일 가벼운 사람(배열의 첫 번째) + 제일 무거운 사람(배열의 마지막 번째)의 합계가 `limit`보다 작거나 같으면 배열의 첫 번째와 마지막 요소를 제거하고 카운트를 증가시킨다.
// 그렇지 않다면(위 두 사람의 합계가 limit을 초과한다면), 제일 무거운 사람부터 보트에 태우기 위해 배열의 마지막 요소를 제거하고 카운트를 증가시킨다.

function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a - b); 
    
    while (people.length) {
        if (people[0] + people.at(-1) <= limit) {
            people.shift();
            people.pop();
            count++; //3
        } else {
            people.pop();
            count++;
        }
    }
    return count;
}