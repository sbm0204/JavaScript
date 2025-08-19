// switch 문
let food = '돈까스';
let foodKinds = '';
// '' 이렇게 표현함으로써 초기화 한다는 뜻이다. 
let tt = 0;
// 얘는 숫자야. 라고 명시해두는 것.  

// 스위치문은 완전비교!
switch(food) {
  case '돈까스':
    foodKinds = '경양식';
    break;
  case '김치찌개' :
    foodKinds = '한식';
    break;
  case '초밥' :
    foodKinds = '일식';
    break;
  default:
    foodKinds = '기타';
    break;
}

if(food === '돈까스') {
  foodKinds = '경양식';
} else if(food === '김치찌개') {
  foodKinds = '한식';
} else if(food === '초밥') {
  foodKinds = '일식';
} else {
  foodKinds = '기타';
}

