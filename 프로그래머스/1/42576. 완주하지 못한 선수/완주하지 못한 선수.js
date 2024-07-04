function solution(participant, completion) {
    let answer = '';

    completion[completion.length] = '';

    let arr1 = participant.sort();
    let arr2 = completion.sort();

    for(let i=0; i<arr1.length; i++){

        if(arr1[i] !== arr2[i]){

             answer = arr1[i];

        }

    }

    return answer;
}

// function solution(participant, completion) {
// var answer = '';

// participant.sort();
// completion.sort();

// for(var i=0;i<completion.length;i++){
//     if(participant[i] != completion[i]){
//         answer = participant[i];
//         break;
//     }
// }
// if(answer != '') return answer;
// else return participant[participant.length-1];
// }