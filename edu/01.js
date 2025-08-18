// 변수 : 변하는 데이터를 저장하기 위한 공간
var var1 = '제육';
let let1 = '햄버거';
var var2;
var2 = 0;

// 상수 : 최초에 대입한 값이 절대 변하지 않는 공간
const const1 = '뚝불';
// const1 = 'asd';

// var를 지양해야하는 이유
// 1. var는 중복 선언이 가능하다. 그래서 실수가 생긴다. 
var name = '홍길동'; //이거 선언한거임
var name = '갑돌이';

// let name2 = '둘리';
// let name2 = '도우너';

// 2. 작성한 코드 상, 선언보다 사용을 먼저 할 경우, 
// 오류가 발생하지 않고, 접근 가능한 현상
// console.log(age);
// let age = 20;

//3. var는 기본적으로 함수레벨 스코프
// scope의 종류 : 전역 scope, 지역 scope -> 함수, 블록레벨 scope
// var globalVar = 'globalVar';
// let globalLet = 'globalLet';
// const globalConst = 'globalConst';

// // 요거는 지역 레벨 scope
// function test() {
//   var localVar = 'localVar';
//   let localLet = 'localLet';
//   const localConst = 'localConst';
//   console.log(globalVar);
//   console.log(globalLet);
//   console.log(globalConst);

//   console.log(localVar);
//   console.log(localLet);
//   console.log(localConst);
// }

// test();

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// // 지역 레벨 scope라서 에러난다. 
// console.log(localVar);
// console.log(localLet);
// console.log(localConst);
// 지역 레벨 scope라서 에러난다. 

// 어디서도 접근 가능하면 전역 scope 입니다용

// if문 이거 블록레벨 scope 임
if(true) {
  var blockVar = 'blockVar';
  let blockLet = 'blockLet';
  const blockConst = 'blockConst';
}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);

// for() {

// }



