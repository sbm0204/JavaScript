// 1) 사과 게임 위에 장기 삽입
// const UL = document.querySelector('#ul');
// const LI = document.createElement('li'); 
// LI.innerHTML = "장기";

// const TARGET = document.querySelector('#apple');
// UL.insertBefore(LI, TARGET);

// --------------------------------------------------------
// 타겟노드 = querySelector('#apple');
const targetApple = document.querySelector('#apple');
// 새노드 createElement(li);, textContent = '장기'
const newJanggie = document.createElement('li');
newJanggie.textContent = '장기';
// 부모노드 = querySelector('#ul');
const parentUl = document.querySelector('#ul');
// 새로운 요소 삽입 > 부모 노드.insertBefore(새노드, 타겟노드);
parentUl.insertBefore(newJanggie, targetApple);
// --------------------------------------------------------
// 이렇게 잘 쪼개야 한다 ㅠ_ㅠ

// 2) 어메이징 브릭에 베이지 배경 추가
// const selectedLi = document.querySelectorAll('li');
// selectedLi[9].style.backgroundColor = 'beige';

const amazingLi = document.querySelector('#ul li:last-child');
amazingLi.style.backgroundColor = 'beige';

// 3) 리스트 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정. 

const listLi = document.querySelectorAll('#ul li');
listLi.forEach((node, idx) => {
  if(idx % 2 === 0) {
    node.style.color = 'blue';
  } else {
    node.style.color = 'red';
  }
});

// function addLiChild(content) {
//   const newNode = document.createElement('li');
//   newNode.textContent = content;
//   parentUl.insertBefore(newNode, targetApple);
// }

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://www.admin.com/img/posts/yesyesyes.png'
};

// addCard

function addCard(item) {
  // 카드 구조 만들기
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = item.title;
  newCardTitle.classList.add('card-title');


  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
}



