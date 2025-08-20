// For 문

// for(let i = 1; i <= 5; i++) {
//   console.log(i + 1);
// }

// for(let i = 1; i <= 5; i++) {
//   console.log(i);
//   if(i >= 3) {
//     break;
//   }
// }

// for(let i = 1; i < 6; i++) {
//   console.log(i);
// }

// 디버깅 하려면 node.js가 있어야한다. 
// breakpoint로 디버깅 할 때 도움이 된다. 


// 1과 2만 나오고 싶을 때
//3이 되면 if문으로 들어가게 되어 break가 된다. 

// for(let i = 1; i <= 5; i++) {
//   if(i >= 3) {
//     break;
//   }
//   console.log(i);
// }


// console로 들어가지 않고 다시 위로 간다. 
for(let i = 1; i <= 5; i++) {
  if(i === 3) {
    continue;
  }
  console.log(i);
}

// for문 밖으로 let 변수 지정해주면 데이터가 안사라진다. 
// 그래서 다른 곳에서 쓸 수 있다. (약간 위험한듯)

// 다중루프
for(let i = 0; i < 3; i++) {
  console.log(`바깥쪽 루프 : ${i}번째`);

  for(let z = 0; z < 3; z++) {
    console.log(`안쪽 루프 : ${z}번째`);
  }
}



// 구구단 2단 출력
// 예시

// let dan = 2;
// for(let i = 1; i < 10, i++) {
//   console.log(`${dan} X ${i} = ${dan * i}`);
// }

let startDan = 2;
let startMultiPlier = 1;
let maxDan = 19;

for(let dan = startDan; dan <= maxDan; dan++) {
  console.log(`** ${dan}단 **`);

   for(let multiPlier = startMultiPlier; multiPlier <= maxDan; multiPlier++) {
    console.log(`${dan} X ${multiPlier} = ${dan * multiPlier}`);
  }
}
