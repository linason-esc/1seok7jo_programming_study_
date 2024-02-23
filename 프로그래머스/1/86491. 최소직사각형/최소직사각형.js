function solution(sizes) {
    let width = 0; //80
    let height = 0; //50
    
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            sizes[i].reverse(); 
        }
        if(sizes[i][0] > width){
            width = sizes[i][0];
        }
        if(sizes[i][1] > height){
            height = sizes[i][1]; 
        }
    }
    
    return width * height;
}