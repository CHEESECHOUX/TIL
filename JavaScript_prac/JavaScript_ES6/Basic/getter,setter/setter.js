// ES5 setter 형태
var book = { title: "HTML"};
Object.defineProperty(book, "change", {
  set: function(param){
    this.title = param;
  }
});
book.change = "자바스크립트";
console.log(book);

// book 오브젝트에 change 프로퍼티를 추가하는 것




// ES6 setter 형태
const book2 = {
  point: 100,
  set setPoint(param){
    this.point = param;
  }
};
book2.setPoint = 200;
console.log(book2.point);

// 변수값을 함수 이름으로 사용한 형태
const name = "setPoint";
const book3 = {
  point: 100,
  set [name](param){
    this.point = param;
  }
};
book3[name] = 200;
console.log(book3.point);

// setter 삭제
const name4 = "setPoint";
const book4 = {
  set [name4](param){
    this.point = param;
  }
};
delete book4[name4]; // delete 연산자로 setter 삭제
debugger;
console.log(book4[name4]);