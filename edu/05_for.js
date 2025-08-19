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

