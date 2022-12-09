// 다른 언어처럼 클래스 기반으로 동작하는 것이 아니라 프로토타입 기반으로 동작

// 프로토 타입 상속 코드
var Human = function(type) {
  this.type = type || "human";
};

Human.isHuman = function(human) {
  return human instanceof Human;
}

Human.prototype.breathe = function() {
  alert("h-a-p-u-m");
};

var Jisoo = function(type, firstName, lastName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};

Jisoo.prototype = Object.create(Human.prototype);
Jisoo.prototype.constructor = Jisoo; // 상속하는 부분
Jisoo.prototype.sayName = function() {
  alert(this.firstName + " " + this.lastName);
};

var oldJisoo = new Zero("human", "Jisoo", "Choi");
Human.isHuman(oldJisoo); // true




// 클래스 기반 코드로 변경
class Human {
  constructor(type = "human") {
    this.type = type;
  }
  
  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert("h-a-p-u-m");
  }
}

class Jisoo extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newJisoo = new Jisoo("human", "Jisoo", "Choi");
Human.isHuman(newJisoo);