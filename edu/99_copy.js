// Shallow copy Vs Deep copy

// const user = {
//   name: 'Soel-Ah',
//   age: 20,
//   friends: {
//     id: 90
//   }
// }

// 얇은 복사 : 최상위 계층(여기선 friends나 name 혹은 age)의 요소만 독립적으로 복사,
// 그 외 계층(friends의 id)은 참조 형태로 복사가 된다. 
// const shallowCopy = {...user};
// shallowCopy.age = 100;

// console.log(user, shallowCopy);

// deep copy : 모든 계층의 요소를 독립적으로 복사. 
// 컴퓨터 리소스를 많이 쓸 수 밖에 없다. 
// Json이나 structuredClone으로 할 수 있지만, Json은 undefined/함수/심볼은 copy하지 못한다. 
// 그래서 node.js(ver.17 이상)로 structuredClone을 사용하면 된다. 
// const jasonCopy = JSON.parse(JSON.stringify(user));
// jasonCopy.friends.id = 200;

// const cloneCopy = structuredClone(user);
// console.log(user);


// Destructuring 문법
// ----------
// const arr = ['hong', 20];

// const [name, age] = arr;
// const [name2] = arr;
// const [, age2] = arr;

// const {name, age, friends} = user2;

// console.log(name, friends);