

// let cnt = 0;

// // 조심해야할 점: 문 꼭 닫아줘야된다. (멈추는 방법)
// while(cnt < 3) {
//   console.log(cnt);
//   cnt++;
  // console.log(`while문 시작`);

//   if(cnt >= 3)
//     break;
// }

  // if() {
  //   break;
  // }
  // console.log(`while문 끝`)

// }

// 구구단 2단

// let value = 1;

// while(value < 11) {
//   console.log( `2 X ${value} = ${2*value}`);
//   value++;
// }

// let multiPlier = 1;

// while(multiPlier < 10) {
//   console.log(`2 X ${multiPlier} = ${2 * multiPlier}`)

//   multiPlier++;
// }


// do-while문 - while문 실행하기 전에 test를 한 번 하기 위해 존재하는 것이다.  
let multiPlier = 1;

do {
  console.log(`2 X ${multiPlier} = ${2 * multiPlier}`)

  multiPlier++;
} while(multiPlier < 10);

