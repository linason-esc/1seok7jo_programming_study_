function solution(ingredient) {
    const HAMBURGER = [1, 2, 3, 1];
    let stack = [];
    let hamburgerCount = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            let slice = stack.slice(-4);
            if (slice.toString() === HAMBURGER.toString()) {
                stack.splice(-4, 4);
                hamburgerCount++;
            }
        }
    }
    
    return hamburgerCount;
}
