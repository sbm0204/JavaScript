class Mammal { // 부모쪽에 중복되는 요소들을 올리는 것을 추상화라고 한다. 
  _name;
  _residence;
  constructor(name, residence) { // 이렇게 초기화를 해준다. 
    this._name = name;
    this._residence = residence;
  }

  breath() {
    console.log(`${this._name}가 폐호흡을 합니다.`);
  }
}

class Whale extends Mammal {
  constructor(name, residence) {
    super(name, residence); // super는 부모이다. 그래서 이는 부모 호출 방법이 된다.
  }

  //오버 라이딩
  breath() {
    console.log(`눈누난나`);
  }

  swimming() {
    console.log(`${this._name}가 헤엄칩니다.`); 
  }
}

class FlyingSquirrel extends Mammal {
  flying() {
    console.log(`${this._name}가 날아갑니다.`); 
  }  
}

const whale = new Whale('고래', '바다');
whale.breath();