// 내 처음 풀이
function solution(n, control) {
    
    let controlArray = [...control];
    console.log(controlArray);
    
    for (i=0; i<controlArray.length; i++) {
        if (controlArray[i] === 'w') {
            n += 1;
        } else if (controlArray[i] === 's') {
            n -= 1;
        } else if (controlArray[i] === 'd') {
            n += 10;
        } else if (controlArray[i] === 'a') {
            n -= 10;
        }
    }
    
    return n;

}

// 두번째 풀이
// 개선점 1 : 문자열을 배열로 변환하지 않고 바로 접근하기 때문에 메모리 사용량이 줄어듦
// 개선점 2 : switch 문을 사용하여 각 경우를 처리하면 가독성이 향상됨
function solution(n, control) {
    for (let i = 0; i < control.length; i++) {
        switch (control[i]) {
            case 'w':
                n += 1;
                break;
            case 's':
                n -= 1;
                break;
            case 'd':
                n += 10;
                break;
            case 'a':
                n -= 10;
                break;
        }
    }
    return n;
}

// 세번째 풀이
// 각 문자가 가지는 값을 미리 객체에 저장해 두고, 반복문을 통해 값을 더하거나 빼는 방식
// 각 문자가 가지는 값을 미리 정의하여, 반복문 내에서 바로 적용할 수 있도록 하여, 코드의 간결성과 유지보수성을 높임
function solution(n, control) {
    const operations = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    };

    for (let i = 0; i < control.length; i++) {
        n += operations[control[i]];
    }
    
    return n;
}
