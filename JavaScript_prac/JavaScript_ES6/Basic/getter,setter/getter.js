/* ES5 getter 형태
오브젝트의 프로퍼티 단위로 getter를 선언함
프로퍼티에 종속적
*/
var book = {};
Object.defineProperty(book, "title", {
  get: function(){ // getter 선언하는 법
    return "책";
  }
});
console.log(book.title);




/* ES6 getter 형태
ES6는 ES5 처럼 프로퍼티의 속성 구조가 아님
*/
const book2 = {
  point: 100,
  get getPoint(){ // getter 선언하는 법
    return this.point;
  }
};
console.log(book2.getPoint);

// Obeject에 다수의 getter를 사용할 수 있음
const book3 = {
  get getPoint(){
    return "포인트";
  },
  get getTitle(){
    return "제목";
  }
};
console.log(book3.getPoint);
console.log(book3.getTitle);