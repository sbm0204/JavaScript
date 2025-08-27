// Event (잘 안쓰인다.)
function test() {
  alert('test');
}

// Property Listener (잘 안쓰인다.)
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('버튼2');
};

// -------------------------------------------------

// addEvent Listener (JS방안에서만 관리할 수 있고 - 관리하기 쉬움 / 그리고 여러 이벤트를 같이 설정할 수 있어서.)
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('232323');
});

btn3.addEventListener('click', btn3Altert);
  function btn3Altert() {
  alert('33333')
}

window.addEventListener('scroll', ()=> {
  console.log('scroll test');
});

// removeEventListener () : 이벤트 제거
// btn3.removeEventListener('click', btn3Altert);

function btn3Altert(event) {
  console.log(event);
  alert('33333');
}
// load에 대해서
// window.addEventListener('load', ()=> {
//   window.open('https://www.google.com');
// });

// ----------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (event) => {
  console.log(event.target.value);
})

// ----------- 비밀번호 보이고 안보이고
// 체크박스 접근 
const chkPw = document.querySelector('#seePw');
// 체크박스에 체인지 이벤트 추가
chkPw.addEventListener('change', (event) => {
  // 인풋 패스워드 접근
  const pw = document.querySelector('#pw');

  // 체크 여부 확인 처리
  if(event.target.checked) {
    // 인풋 패스워드 type 속성을 text로 변경
    pw.setAttribute('type', 'text');
  } else {
    // 인풋 패스워드 type 속성을 password로 변경 (check를 풀었을때 다시 비밀번호가 안보이도록 하는 기능.)
    pw.setAttribute('type', 'password');
  }
});


