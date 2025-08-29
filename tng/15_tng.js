// const time = document.querySelector('#date-time')

// function clock() {
//   const now = new Date();

//   const nowHours = now.getHours();
//   const nowMinutes = now.getMinutes();
//   const nowSeconds = now.getSeconds();

//   const ampm = nowHours < 12 ? "AM" : "PM";
//   const time = ampm + ' ' + nowHours + ":" + nowMinutes + ":" + nowSeconds;

//   document.querySelector('#date-time').innerHTML = time;}

// let timeInterval = setInterval(() => {
//   clock();
// }, 1000);

// // 멈춰!!!
// const stopBtn = document.querySelector('#stopBtn');
// stopBtn.addEventListener('click', () => {
//   clearInterval(timeInterval);
//  })

// // 재시작
// const redoBtn = document.querySelector('#redoBtn');
// redoBtn.addEventListener('click', () => {
//   timeInterval = setInterval(() => {
//   clock();
// }, 1000);
// console.log(redoInterval);})

// ----------------------------선생님 코드----------------------------------------------
nowTimeIntoElement('#date-time');


let intervalNowTime = setInterval(() => {
  const nowTime = document.querySelector('#date-time');
  nowTime.textContent = generateNowTimeFormat();
}, 1000);


// 멈춰 버튼 처리
const btnStop = document.querySelector('#stopBtn');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null;
})

// 재시작 버튼 처리
const btnRestart = document.querySelector('#redoBtn');
btnRestart.addEventListener('click', () => {
  nowTimeIntoElement('#date-time');

  // clearInterval(intervalNowTime); 리소스 처리할 수 있다

  if(intervalNowTime === null) {
  intervalNowTime = setInterval(() => {
    nowTimeIntoElement('#date-time');    
  }, 1000);
  }
});


// 기록 버튼
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportContainer');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMillisec();
  // newP.textContent = document.querySelector('#timeBox').textContent;
  container.appendChild(newP);
});

// 기록 초기화
const resetReportBtn = document.querySelector('#btnReportReset');
resetReportBtn.addEventListener('click', () => {
  document.querySelector('.reportContainer').textContent = '';
})

//------------------------ 밑으로는 함수---------------------


// void = 함수안에 return 이 없다는 뜻
// JS Doc 를 통해서 selector에 string 타입만 오게 할 수 있다.
/**
 * selector로 선택한 요소의 textContent에 현재 시간 삽입.
 * @param {string} selector 
 */

function nowTimeIntoElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
}

/**
 * 현재 시간을 `오전 HH:mi:SS` 형식으로 반환. 
 * @returns {string}
 */

function generateNowTimeFormat() {
  const now = new Date();
  // return now.toLocaleTimeString();
  let nowHours = now.getHours();
  let nowMinutes = now.getMinutes();
  let nowSeconds = now.getSeconds();

  let ampm = '';
  if(nowHours < 12) {
    ampm = '오전 ';
  } else {
    ampm = '오후 ';
    nowHours -= 12;
  }
  nowHours.toString().padStart(2, '0');

  return `${(ampm)}`
  +  `${(nowHours.toString().padStart(2, '0'))}`
  + `:${nowMinutes.toString().padStart(2, '0')}`
  + `:${(nowSeconds.toString().padStart(2, '0'))}`;
}

/**
 * 현재 시간을 `오전 HH:mi:SS.sss` 형식으로 반환. 
 * @returns {string}
 */

function generateNowTimeFormatUntilMillisec() {
  const now = new Date();
  // return now.toLocaleTimeString();
  let nowHours = now.getHours();
  let nowMinutes = now.getMinutes();
  let nowSeconds = now.getSeconds();
  let nowMilliseconds = now.getMilliseconds();

  let ampm = '';
  if(nowHours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    nowHours -= 12;
  }
  nowHours.toString().padStart(2, '0');

  return `${(ampm)}`
  +  `${(nowHours.toString().padStart(2, '0'))}`
  + `:${nowMinutes.toString().padStart(2, '0')}`
  + `:${(nowSeconds.toString().padStart(2, '0'))}`
  + `:${(nowMilliseconds.toString().padStart(2, '0'))}`;
}
