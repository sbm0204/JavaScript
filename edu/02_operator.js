// 산술연산자
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // 더하기
console.log(num1 - num2); // 빼기
console.log(num1 * num2); // 곱하기
console.log(num1 / num2); // 나누기
console.log(num1 % num2); // 나머지

// 문자열 연결 연산자
let firstName = '길동';
let lastName = '홍';
console.log(lastName + firstName);
console.log(lastName.concat(firstName));

// 산술대입연산자
let num3 = 0;
// num3 = num3 + num1;
num3 += num1;
console.log(num3);
num3 -= num1;
console.log(num3);
num3 *= num1;
console.log(num3);
num3 /= num1;
console.log(num3);

// (전위|후위)증감 연산자
// 둘 중 하나만 쓴다. 
// 전위는 이미 계산이 되고 console 처리가 되는 것이고
// 후위는 console 처리 된 후 계산이 되는 것이라
// 두 개의 값이 다르다. 
let num4 = 0;
num4--;
console.log(num4);
console.log(++num4);

// 비교 연산자
let num5 = 1;
let mum6 = 2;
console.log(num5 > num6);
console.log(num5 >= num6);
console.log(num5 < num6);
console.log(num5 <= num6);
// 같다라는 표시를 하고 싶다. ==, ===로 가능. 
// ==는 데이터 타입을 체크하지 않는다. 불안전 비교
// ===는 데이터 타입 체크가 가능하다. 완전 비교
// !를 넣으면 같지 않다라고 나온다. 
console.log(1 == '1');
console.log(1 != '1');
console.log(1 === '1');
console.log(1 !== '1');


// 논리 연산자
console.log((1 === 1) && (1 === 0));
console.log((1 === 1) || (1 === 0));
console.log(!(1 === 1));

// 삼항연산자
// 조건식 ? 참일 경우 처리 : 거짓일 경우 처리
let rank = 3;
let result = rank <= 2 ? '통과' : '거부';
console.log(result);