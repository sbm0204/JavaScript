// const containerForTexts = document.querySelector('#containerForTexts');

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', btnForText);

// function btnForText() {
//     const inputText = document.querySelector('#text').value;
//     const newTextBox = document.createElement('div');
//     newTextBox.textContent = inputText;
//     containerForTexts.appendChild(newTextBox);
//     return document.querySelector('#text').value = ''
// }

// --------------------------------------------------------
const writeBtn = document.querySelector('#btn');
writeBtn.addEventListener('click',() => {
  const keywordInput = document.querySelector('#keyword');
  let keyword = keywordInput.value;
  // false 로 인식 -> [false | null | undefined | 0 | '']
  if(keywordInput.value) {
  // content 요소 생성
  const newContent = document.createElement('div');
  newContent.classList.add('content');
  const newP = document.createElement('p');
  newP.textContent = keyword;
  newContent.appendChild(newP);

  // line-through 적용하기
  newContent.addEventListener('click', (e) => {
    e.target.classList.toggle('toggle-line-through');
  });
  
  // 생성한 요소 추가
  const printBox = document.querySelector('.print-box');
  printBox.appendChild(newContent);

  // 검색어 초기화
  keywordInput.value = '';
  }
})

// 공통되는 건 함수로 따로 빼기

// event 객체 - 주로 검증 체크할 때 많이 쓰인다. 

const keywordInput = document.querySelector('#keyword');
keywordInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    const writeBtn = document.querySelector('#btn');
    writeBtn.click();
  } 
});




