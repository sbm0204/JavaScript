// date 객체
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작

// date 인스턴스
// JS에서 Month는 0-12개월 입니다. 
const now = new Date();
const date1 = new Date(`1990-02-23 14:30:00`);
const date2 = new Date(1980, 10, 10, 23, 0, 1);
const date3 = new Date(32984038059); // date - date 뺄 때 유닉스 타임스탬프로 나옵니다. 그걸 시간으로 바꾸고 싶을때.

// getFullYear() :연도 획득
const nowYear = now.getFullYear();
console.log(nowYear);

// getMonth() : 월 획득, (**주의** 0~11로 반환)
const nowMonth = now.getMonth() + 1;
console.log(nowMonth);

// getDate() : 일 획득
const nowDate = now.getDate();
console.log(nowDate);

// getHours() : 時를 반환
const nowHours = now.getHours();
console.log(nowHours);

// getMinutes() : 分을 반환
const nowMinutes = now.getMinutes();
console.log(nowMinutes);

// getSeconds() : 초를 반환
const nowSeconds = now.getSeconds();
console.log(nowSeconds);

// getMilliseconds() : 밀리초를 반환
const nowMilliseconds = now.getMilliseconds();
console.log(nowMilliseconds);

// getDay() : 요일을 반환(**주의** 0~6 반환, 0=일요일)
const nowDay = now.getDay();
console.log(nowDay);

// 요일을 한글로 변환.
let koreanDay = ''
switch(nowDay) {
 case 0:
  koreanDay = '일요일';
  break;
 case 1:
  koreanDay = '월요일';
  break;
 case 2:
  koreanDay = '화요일';
  break;
 case 3:
  koreanDay = '수요일';
  break;
 case 4:
  koreanDay = '목요일';
  break;
 case 5:
  koreanDay = '금요일';
  break;
 default:
  koreanDay = '토요일';
  break;
}

// xxxx연도 xx월 xx일 xx:xx:xx ''요일
const nowFormat = `${nowYear}년 ${lpad(nowMonth, 2, '0')}월 ${lpad(nowDate, 2, '0')}일 ${lpad(nowHours, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')} ${koreanDay}`;
console.log(nowFormat);
console.log(typeof(nowYear), typeof(nowYear.toString()), typeof(String(nowYear)));

function lpad(origin, length, fillStr) {
  // origin의 타입 체크를 먼저한다. 
  if(typeof(origin) === 'number') {
    origin = origin.toString();
  }
  return origin.padStart(length, fillStr);
}

// 두 날짜의 차를 구하는 방법
const targetDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(targetDate - now) / (1000 * 60 * 60 * 24));
// 일 단위 1000 * 60초 * 60분 * 24시간 

console.log(diff);
