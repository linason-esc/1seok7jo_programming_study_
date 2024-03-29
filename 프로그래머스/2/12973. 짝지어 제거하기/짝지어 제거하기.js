function solution(s)
{
    //빈 스택 생성
    let stack = [];
    
    //스택에 하나씩 값을 push하며 하나씩 비교하면서 값이 같으면 제거
    for (let i=0; i<s.length; i++) {
        stack.push(s[i]);
        
        if (stack[stack.length-1] === stack[stack.length-2]) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
}