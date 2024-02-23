function solution(price, money, count) {
    let newPrice = 0;
    for(i=1; i<=count; i++) {
        newPrice += (price*i);
        //console.log(newPrice);
    }
    
    return (money > newPrice ? 0 : newPrice - money);
}