// String 객체
let str = '문자열입니다.';
// `문자"'\`열입니다.` <-\ 백슬래쉬로 해서 `를 문자취급한다. 문자열을 닫는 기능X

// length : 문자열의 길이를 반환
// 이터러블 하다 => 방번호 혹은 인덱스가 있다라는 뜻.
console.log(str.length);

// chatAt(idx) : idx의 요소의 값을 반환
console.log(str.charAt(3));

// indexOf(searchStr, idx) : 해당 문자열에서 searchStr을 찾아서 최초의 인덱스를 반환합니다. 검증할때도 사용된다. (-1이 나오는지 안나오는 지)
// 찾지 못한다면, -1 반환.
// idx는 생략 가능, start 지점 지정
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열')); // 앞의 열
console.log(str.indexOf('열', 3)); // 뒤의 열
console.log(str.indexOf('입니다')); // 결과는 3. 왜냐면 시작 부분 - 입이 인덱스 3이라서.
console.log(str.indexOf('숫자')); // -1이 나온다. 없는 것은 -1이 나오거든.
console.log(str.includes('숫자')); // 존재 여부를 체크할 때는 includes 이용. 가독성이 더 나음. 

// replace(pattern, replacement) : pattern을 찾아서 첫번째 문자열을 replacement로 치환한 문자열을 반환한다. 
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '숫자').replace('문자열', '숫자'));


// replaceAll(pattern, replacement) : pattern을 찾아서 모든 문자열을 replacement로 치환한 문자열을 반환한다. 
str = '문자열입니다. 문자열입니다.';
console.log(str.replaceAll('문자열', ''));

// substring(startIdx, endIdx) : startIdx 부터 endIdx 까지 자른 문자열을 반환. (startIdx, endIdx)에서 endIdx는 포함안됨. 
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(3, 5));

// split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환. join(separator) 의 반대! 
// limit로 배열의 길이를 조절하며, 생략 가능
str = '탕수육,짜장면,짬뽕,크림새우';
let arr = str.split(',');

// 밑은 join 메소드의 예시
// const arr12 = [1, 2, 3, 4, 5];
// const resultJoin = arr12.join(':');
// console.log(resultJoin);
// 결과는? 1:2:3:4:5

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환.
str = '      하하 ';
console.log(str.trim());

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환. 
str = 'AfsdjflkjD';
console.log(str.toUpperCase());
console.log(str.toLowerCase());