// Callback hell

setTimeout(() => {
  console.log('A');
  
  setTimeout(() => {
  console.log('B');
    
    setTimeout(() => {
    console.log('C');

    }, 1000);
  }, 2000);
}, 3000);


// Promise 객체
// 비동기 처리의 결과를 제공하겠다는 약속을 반환. 
// 단, 비동기 처리가 끝날 때까지 결과를 기다리는 것은 아님.

function pro1(str, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(str === 'A' || str === 'B' || str === 'C') {
        console.log(str);
        resolve();
      } else {
        reject();
      }
    }, ms);
  });
}

// pro1('A', 3000)
// .then(() => {
//   console.log('Then');
// }) // 작업이 성공했을 때, then 메소드의 콜백 함수 = then() 를 실행하게 된다. 
// .catch(() => {
//   console.log('Catch');
// }) // 작업이 실패했을 때, catch 메소드의 콜백 함수 = catch() 를 실행하게 된다. 
// .finally(() => {
//   console.log('Finally');
// }) // 성공 혹은 실패의 여부 상관없이 무조건 실행한다. 

pro1('A', 3000)
.then(() => {
  pro1('B', 2000)
  .then(() => {
    pro1('C', 1000)
    .then()
    .catch();
  })
})
.catch();

pro1('A', 3000)
.then(() => {
  return pro1('B', 2000);
})
.then(() => {
  return pro1('c', 1000);
})
.catch();
