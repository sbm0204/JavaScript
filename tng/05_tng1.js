// *****
// *****
// *****
// *****
// *****


// for(let i = 0; i < 5; i++) {
//   console.log('*****')
// }

// let star = '*';
// let makedStar = '';
// makedStar += star;
// makedStar += star;
// makedStar += star;
// makedStar += star;
// makedStar += star;
// console.log(makedStar);

// let star = '*';


// for(let i = 0; i < 5; i++) {
//   let makedStar = '';

//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
//   }

//   console.log(`${makedStar}`);
// }


// console 다음행에 makedStart = '';를 넣으면 지금 초기화 한거임. 


// 첫번째

// let star = '*';
// let makedStar = '';

// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//     makedStar += star;
//   console.log(makedStar);
// }


// for(let i = 0; i < 5; i++) {
//   let makedStar = '';
//   for(let z = 0; z <= i; z++) {
//       makedStar += '*';
//   }
//   console.log(makedStar);
// }

// let star = '*';
// let makedStar = ' ';

// for(let i = 0; i < 5; i++) {
//   for(let z = 0; z < 1; z++) {
//       makedStar += star;
//   }
//   console.log(`${makedStar}`);
// }

// 두번째) (lineCnt = 5; lineCnt > 0; lineCnt--은
// 공백을 쉽게 계산하기 위한 선택이었고, 꼭 그래야만 하는 건 아님.)

let makedStar = '';

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';

  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar)
}

// 두번째-1) 이걸 **증가 방식 (lineCnt = 0 → 4)**으로도 만들 수 있습니다.
// 그냥 lineCnt++를 써서 공백은 줄이고, 별은 늘어나게 만들면 돼요.

// for (let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   let makedSpace = '';
//   let makedStar = '';

//   // 공백은 4 → 3 → 2 → 1 → 0 으로 줄어들어야 함
//   for (let i = 0; i < 4 - lineCnt; i++) {
//     makedSpace += ' ';
//   }

//   // 별은 1 → 2 → 3 → 4 → 5 로 늘어나야 함
//   for (let i = 0; i <= lineCnt; i++) {
//     makedStar += '*';
//   }

//   console.log(makedSpace + makedStar);
// }

