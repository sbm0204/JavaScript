// 일정 시간이 지난 후 작업을 실행하는 함수
// const timeoutNum1 = setTimeout(() => {
//   console.log('2초');
// }, 2000);

// setTimeout 취소 
// clearTimeout(timeoutNum1);

// 일정 시간마다 반복해서 실행하는 함수 (30mms 딜레이가 됨.)
const intervalId1 = setInterval(() => {
  console.log('인터벌 3초')
}, 3000);

// setInterval() 제거
clearInterval(intervalId1);

