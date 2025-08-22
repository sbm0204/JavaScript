// Object는 여러 개의 키-값 쌍으로 이루어진 복합 데이터 타입(객체)
// 주로 상수로 생성한다. 
// 대괄호 안에 함수도 들어갈 수 있다.  -> it got called Method after getting into {}.  
const obj1 = {
  id: 1,
  name: '홍길동',
  gender: '남자',
  age: 20,
  fnc1: (a, b) => a + b,
};

const obj2 = {
  title: '홍길동이 쓴 글이다.',
  userInfo: obj1
}

console.log(obj2.userInfo.name);

// obj2 는 const로 감싸서 전체 수정은 불가하다. 허나 obj2.userInfo.name 이런식으로 하나의 키 정도는 바꿀 수 있다. 
// optional chaining (ECMA 2022 추가)
// obj2.userInfo.rank.test; 처럼 없는 property에서 (여기서 undefined가 된다.) 또 없는 데이터를 찾게 된다면 오류가 생긴다. 
// 그래서 한 번 검색해보고 진행한다. 밑에는 테스트하는 방법을 기록해뒀다. 
// '?.'을 기준으로 앞의 평가대상이 undefined || null 이 아니면 처리를 계속 이어가고
// undefined || null이면 false를 반환하고 멈춘다. 
if(obj2.userInfo.rank) {
  obj2.userInfo.rank.test;
}
// 혹은 이렇게 해도 된다. 
obj2.userInfo?.rank?.test;

// ---------------------------------------------------------------------------------------------------------------
// Array 객체 (참조형)
// 하나의 변수에 여러 개의 값을 순차적으로 저장할 수 있는 데이터 구조. 
// 여러 종류의 데이터 타입을 저장 가능. -> 하지만 관리를 위해서는 **데이터 타입 1개**만 쓰는 것이 좋다. 
// 배열의 길이는 동적으로 변화
// 각 요소는 0부터 시작하는 index(번호표/이름표와 같이?)를 가집니다. 
const arr1 = [1, 2, 3, 4, 5, 6, '홍길동', obj1, 9];

console.log(arr1[0]);

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 배열 복사
// spread operator 문법
// deep copy은 원본과 카피본을 아예 다른 것으로 지정하기 위한 문법.
const arr3 = [...arr2];
arr3[0] = [10, 20, 30];
console.log(arr2);

const obj3 = {...obj1}; 
// shallow copy and spread operator is different. Shallow copy is a basic way we copy objects in programming. 

// length : 배열의 길이 반환.
console.log(arr1.length);

// isArray(arg) : 배열 여부를 체크, 고객의 data를 받았을 때 뭐가 안에 들었는지 체크가 필요해서. 
console.log(Array.isArray(arr1));
console.log(Array.isArray(1));

// indexOf(searchElement) : 배열에서 특정 요소를 검색해서 인덱스를 반환. 
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.indexOf()); // 해당 요소의 인덱스 반환.
console.log(arr4.indexOf()); // 만약 찾는 데이터가 없으면 -1 반환. 그래서 특정 값이 있는지 없는지 확인하려고. 

// includes(searchElement) : 특정 요소의 존재여부 확인, **boolean 반환**
console.log(arr4.includes('홍길동')); // true 반환
console.log(arr4.includes('김지인')); // false 반환

// push(...args) 의 의미는 arguments들이 몇 개 혹은 몇백 개 이상이 되어도 받아주겠다는 것. 
// 그리고 원본 배열에 1. 마지막 요소를 추가하고, 2. 바뀐 length 반환 (swallow copy)
const resultLength = arr4.push(100);
console.log(resultLength, arr4);

// concat(...args)은 배열의 마지막 요소를 추가한 새로운 배열을 반환. 
const arr5 = [1, 2, 3];
const resultConcat = arr5.concat(4);
console.log(arr5, resultConcat);

// pop() : 원본 배열의 마지막 요소를 제거하고, 제거한 요소를 반환. 
const arr6 = [1, 2, 3];
const resultPop = arr6.pop();
console.log(arr6, resultPop); // 나중에 쓸거다. 그러면 이렇게 변수로 저장.  근데 굳이 저장할 필요 없다. 그러면 이렇게 써도 가능 -> arr6.pop(). 
arr6.pop()
// 여기서 arr6.pop()이 2개 사용했기 때문에 [1]만 남는다. 

// unshift(...args)은 원본 배열의 1. 첫번째 요소를 추가, 2. 변경된 length를 반환.
// 많은 파라미터를 받는 것을 가변 파라미터 = ...args 라고 합니다.
const arr7 = [1, 2];
const resultUnshift = arr7.unshift(2, 3, 4);
console.log(arr7, resultUnshift);

// shift() 은 원본 배열의 첫번째 요소를 제거하고, 제거된 요소(값)를 반환. 
const resultShift = arr7.shift();
console.log(arr7, resultShift);

// ---------------------------------------------------------------------------------------------------------------

// splice(start, count, ...args) : 원본에서 특정 요소를 자르는 method

// 1) start만 지정했을 경우. 
  // 1-1) start가 양수일 경우, 인덱스가 start인 요소부터 모두 제거하고 잘린 배열을 반환. (3)이니까 인덱스 3부터 끝까지 제거
  const arr8 = [1, 2, 3, 4, 5, 6];
  const resultSpliceStartPositive = arr8.splice(3); // splice(3) → 인덱스 3부터 끝까지 제거
  console.log(arr8, resultSpliceStartPositive);
  // 결과는? 제거된 부분: [4, 5, 6] 이랑 남은 배열: [1, 2, 3]
  // 1-2) start가 음수일 경우, 인덱스가 배열의 끝 요소부터 start만큼의 요소를 제거하고 잘린 요소를 배열로 반환. 
  const arr9 = [1, 2, 3, 4, 5];
  const resultSpliceStartNagative = arr9.splice(-3); // splice(-3) → 뒤에서 세 번째 요소(인덱스 2)부터 끝까지 제거
  console.log(arr9, resultSpliceStartNagative) 
  // 결과는? 제거된 부분: [3, 4, 5] 이랑 남은 배열: [1, 2]

// 2) start와 count만 지정할 경우.
const arr10 = [1, 2, 3, 4, 5];
const resultSpliceCount = arr10.splice(2, 1); // splice(2, 1) → 인덱스 2(3)부터 1개 제거
console.log(arr10, resultSpliceCount);
// 결과는? 제거된 값: [3] 이랑 남은 배열: [1, 2, 4, 5]

// 3) start, count, ...args 모두 전달할 경우.
const arr11 = [1, 2, 3, 4, 5];
const resultSpliceArgs = arr11.splice(1, 1, 100); // splice(1, 1, 100) → 인덱스 1(2)를 제거하고, 그 자리에 100을 추가
console.log(arr11, resultSpliceArgs);
// 결과는? 제거된 값: [2] 이랑 변경된 배열: [1, 100, 3, 4, 5]

// 4) join(separator) : 배열의 요소를 구분자로 연결한 문자열을 만들어서 반환. 
const arr12 = [1, 2, 3, 4, 5];
const resultJoin = arr12.join(':');
console.log(resultJoin, arr12);
// 결과는? 1:2:3:4:5 [1, 2, 3, 4, 5]

// 5) sort(callback) : 원본 배열의 요소를 문자열로 변환 후 오름차순 정렬을 해서 만든 배열을 반환.
// (a - b)가 양수일 경우, a가 큰수, b가 작은 수로 인식하여 정렬.
// (a - b)가 음수일 경우, a가 작은 수, b가 큰 수로 인식하여 정렬. 
// (a - b)가 0일 경우, 같은 값으로 인식하여 정렬하지 않음. 
const arr13 = [5, 23, 26, 40, 2];
const resultSort = arr13.sort((a, b) => a - b);
console.log(resultSort.arr13);

// 6) map(callback)은 배열의 모든 요소에 대해 콜백함수를 반복하여 실행한 후, 새로운 배열을 반환. 사용 빈도수가 높다.
const arr14 = [1, 2, 3, 4, 5];
const resultMap = arr14.map(val => {
  if(val % 3 === 0) {
    return '짝';
  } else {
    return val;
  }
});
console.log(arr14, resultMap);

// for(let i = 0; i < arr14.length; i++) {
//   arr14[i] *=2;
// }
// console.log(arr14);

// 2의 배수만 '이'라고 출력해주세요. 

const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultMapFor15 = arr15.map(val => {
  if(val % 2 === 0) {
    return '이';
  } else {
    return val;
  }
});
console.log(resultMapFor15);

// 7) some(callback) : 배열의 모든 요소에 대해서 콜백함수를 반복
// 조건에 만족하는 결과가 **하나라도 있으면 true**, 없으면 false
const arr16 = [1, 2, 3, 4, 5];
const resultSome = arr16.some(val => val === 10); 

// 8) every(callback) : 배열의 모든 요소에 대해서 콜백하수를 반복 실행 후,
// **모든 요소가 조건에 만족하면 true**, 아니면 false가 됩니다. 
const arr17 = [1, 2, 3, 4, 5];
const resultEvery = arr17.every(val => val % 3 === 0);
console.log(resultEvery);

// 9) filter(callback) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후, 
// 조건에 맞는 요소만 모아서 배열로 반환합니다. 
const arr18 = [1, 2, 3, 4, 5];
const resultFilter = arr18.filter(val => val % 2 === 0);
console.log(resultFilter);

// 10) forEach(callback) : 배열의 모든 요소에 대해 콜백함수를 반복 실행. 결과값X
const arr19 = [1, 2, 3, 4, 5];
arr19.forEach((val, key) => console.log(`${key} : ${val}`));
// **val**은 배열의 **값(value)**을 의미합니다.
// **key**는 배열의 **인덱스(index)**를 의미합니다.

// 11) Destructuring 문법 : 배열의 요소를 순서대로 변수에 할당.
const arr20 = [1, 2];
const num1 = arr20[0];
const num2 = arr20[1];

// 위 상수 선언식이랑 밑에 Destructuring 문법을 사용해서 나온 코드랑 둘 다 목적(데이터 복사)은 똑같다. 

const [num3, num4] = arr20;
console.log(num3, num4);