// Math 객체

// 올림 ceil(arg), 반올림 round(arg), 버림 floor(arg)
let double = 0.9;
Math.ceil(double); // 1
Math.round(double); // 1
Math.floor(double); // 0

// 우리=>고객 = 올림 / 고객 => 우리 = 버림

// random() : 0 초과 1미만의 랜덤한 수를 반환. 
let ransomDouble = Math.random();

// 1~10 난수
console.log(Math.ceil(ransomDouble * 10));

// 0. 저장용 배열 만들기 (length: 11, 각 요소의 값은 0)
const arrSaveCnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 1. 루프 100만번 돌려
for(let i = 0; i < 1_000_000; i++) {
  //  1-1. 랜덤수 획득 Math.ceil(ransomDouble * 10)
  let randomNum = Math.ceil(random() * 10);
  //  1-2. 저장용 배열에 나온 숫자를 카운트해서 저장. 
  arrSaveCnt[randomNum]++;
}

// 2. 저장용 배열 확인
console.log(arrSaveCnt);

// abs(arg) : 절대값을 반환-> 음수를 없애는 것.
Math.abs(1);
Math.abs(-1); 
