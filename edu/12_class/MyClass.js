class MyClass {
  name; // public : 클래스 내외부 어디서든 접근이 가능. 
  #age; // private : 클래스 내부에서만 접근이 가능. 
  _addr; // protected : 상속관계에서 자식클래스들은 접근이 가능. 
  static gender = 'M'; // new 하지 않아도 접근 할 수 있다. 인스턴스화를 별도로 하지 않아도 괜찮다. 잘 안쓴단다. 데이터 너무 많이 먹음.

  // 생성자 메소드
  // `new`키워드로 객체를 인스턴스화 할 때, 딱 한 번 실행이 된다. 
  // 밑에 형태가 초기화 처리한 상태. 
  constructor(name, age, addr) {
      this.name = name;
      this.#age = age;
      this._addr = addr;
  }

  // getter / setter - set은 꼭 파라미터가 있어야한다. method이지만 사용할 때 property 처럼 사용하듯이 동작한다. 
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }

  // 인스턴스 메소드

  getAgeSum(a, b) {
  return this.#add(a, b);
}

  #add(a, b) {
    return a + b;
  }
}

const myClass = new MyClass('홍길동', 20, '조선');
const myClass2 = new MyClass('갑순이', 10, '한국');
console.log(myClass.age);
myClass.age = 40;
console.log(myClass.age);
console.log(myClass2.name);

// class MyClass2 extends MyClass { // extends를 통해서 상속됨. 
//   multi (a, b) {
//     return a * b;}
// } 
// let num = 1;
// const myClass = new MyClass();
// const myClass2 = new MyClass(); // 이렇게 많이 쓴다. 두개의 다른 상수들이 같은 MyClass를 받을 수 있다. 
// let addNum = myClass.add(5, 10);
// myClass2.multi(1, 2);
// console.log(addNum);

// new를 쓰는 이유가 기본적인 메소드가 아니고
// 커스텀이라서 메모리에 저장이 안되어있기때문에 
// 새로 만들어준다는 느낌으로 new를 넣어준다.
