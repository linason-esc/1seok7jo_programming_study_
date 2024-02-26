function solution(a, b) {
    
  // 2016년 a월 b일의 Date 객체 생성
  var date = new Date(2016, a - 1, b);
    
  // Date 객체에서 요일을 가져옴 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  var day = date.getDay();
    
  // 요일에 해당하는 문자열 배열
  var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
  // 해당 요일 문자열 반환
  return days[day];
}
