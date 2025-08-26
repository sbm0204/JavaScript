// 요소 선택
// HTML 요소의 ID로 선택
const title = document.getElementById('title');
console.log(title);
title.style.color = 'blue';

// HTML 요소의 태그명으로 선택하는 방법
const tagH1 = document.getElementsByTagName('h1'); // 배열
console.log(tagH1);
tagH1[1].style.fontSize = '50px';

for(let i = 0; i < tagH1.length; i++) {
  tagH1[i].style.fontSize = '50px';
}

// HTML 요소의 클래스명으로 선택 방법
const classH1 = document.getElementsByClassName('test');
console.log(classH1);

// *** 중요 *** CSS 선택자로 요소를 선택하는 방법
// 복수일 경우 가장 첫 번째 요소만 선택
const selectorTitle = document.querySelector('#title');
selectorTitle.style.color = 'red';

// *** 중요 *** CSS 선택자로 요소를 선택하는 방법
// 복수일 경우 모두 선택을 한다, NodeList 객체
const selectorAllH1 = document.querySelectorAll('h1');
selectorAllH1.forEach(node => node.style.color = 'green');


// -----------------------------
// 요소 조작
// -----------------------------

// textcontent : 컨텐츠를 획득 및 변경, 순수한 텍스트 데이터를 전달. 그래서 태그도 텍스트로 인식해버림.
selectorTitle.textContent = '넣어주면 된다.';
// innerHTML : 컨첸트를 획득 및 변경, **태그는 태그로 인식**해서 전달. 
selectorTitle.innerHTML = '이너로 넣었다.';

// setAttribute(속성명, 값) : 요소에 속성을 추가
const inputEmail = document.querySelector('input');
inputEmail.setAttribute('placeholder', '이메일을 적어주세요.');
inputEmail.setAttribute('required', '');

// removeAttribut(속성명) : 요소의 속성을 제거한다. 
selectorAllH1[1].removeAttribute('style');

// ------------------------------
// 요소 스타일링
// ------------------------------

title.style.color = 'red';

// HTML 요소에 클래스로 스타일 추가
// const p = document.querySelector('p');
// p.setAttribute('class', 'test2'); // 이건 교체다. class에서 원래 test를 test2로 바꾸는 거다. 

// classList : HTML 요소에 클래스로 스타일 추가
const p = document.querySelector('p');
p.classList.add('test2');
p.classList.remove('test');
p.classList.toggle('test3'); // test3가 없어도 toggle 메소드덕에 생긴다. 
