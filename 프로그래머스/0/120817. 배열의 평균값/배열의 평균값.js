function solution(numbers) {
    let sum = 0;
    
    for (i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    
    let average = sum / numbers.length;
    return average;
}