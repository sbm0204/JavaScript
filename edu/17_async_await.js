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


// async/await 문법 - promise 지옥을 개선하기 위해 만들어진 문법.
// 유지보수성, 가독성이 좋다. 
// 내부적으로 Promise 객체를 사용하여 비동기 처리를 실행한다. 
// 기본적으로 함수여야함. async + 함수여야만 await 사용할 수 있다. 

async function test() {
  try {
    await pro1('A', 1500);
    await pro1('B', 1000);
    await pro1('C', 500);
  }
   catch (error) {
    console.log(error);
  }
}
  

test();

