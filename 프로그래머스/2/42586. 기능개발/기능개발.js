//뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 
//이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
//-> 배포가 가능해지는 날짜들을 모은 배열들을 만들어서 판단해보자!

function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  ); //[7,3,9]
  let count = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      maxDay = days[i];
      answer.push(count);
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}

//days 배열에는 예시 1로 들면 [7,3,9] 가 들어가 있다
//maxDays변수는 days[0]으로 초기화 시켜주고, days배열을 순회한다
//현재 순회하는 배열 인덱스의 값이 maxDays보다 작으면 count증가, 
//반대이면 maxDays를 현재 배열 인덱스값으로 할당하고 cnt를 answer에 삽입, count는 다시 1로 초기화
