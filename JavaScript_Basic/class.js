// 생성자 함수
const User = function(name, age) {
  this.name = name;
  this.age = age;
  // this.showName = function() { // 1. 객체 내부에 showName으로 작성됨
  //   console.log(this.name);
  // };
};

User.prototype.showName = function() { // 2. prototype 내부에 showName으로 작성
  console.log(this.name);
}

const jisoo = new User('Jisoo', 29); // new 없으면 undefined로 떠서 에러인지 확인 불가
// console.log(jisoo); 



// 클래스
class User2 {
  constructor(name, age) { // 메서드 constructor는 빈 객체를 만들어주고 this를 가리키게됨
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const soo = new User2('Soo', 20); // new를 빼면 TypeError로 뜸. 클래스는 new 없이 실행할 수 없다
// console.log(soo);

for(const i in jisoo) { // name, age, showName 출력
  console.log(i);
}

for(const i in soo) { // name, age 출력. prototype은 출력 안됨
  console.log(i);
}



// 1. 메소드 오버라이딩(method overriding)
// 2. constructor overriding
class Car {
  constructor(color) { // class의 constructor는 {}빈 객체를 만들어주고 this로 이 객체를 가리키게됨
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log('drive..');
  }
  stop() {
    console.log('stop');
  }
}

class Bmw extends Car {
  constructor(color) { // 2. constructor overriding // extend를 써서 만든 자식 객체는 부모객체와 달리 this에 할당하는 작업을 건너뜀
    super(color);      // super 키워드로 부모 class의 constructor을 실행 시켜야함
    this.navigation = 1; 
  }
  park () {
    console.log('PARK');
  }
  stop() { // 부모 class와 같은 이름 메서드를 작성하면 덮어쓰게 됨! // OFF로 출력
    console.log('OFF'); 
  }
  drive() {
    super.drive(); // 1. 메소드 오버라이딩
    console.log('drivedrive');
  }
}

const z4 = new Bmw('blue');

console.log(z4);
console.log(z4.drive);
console.log(z4.stop);