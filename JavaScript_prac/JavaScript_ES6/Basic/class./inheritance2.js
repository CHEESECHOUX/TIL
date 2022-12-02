// Built-in 오브젝트 상속
class Point extends Array {
  constructor() {
    super();
  }
  getTotal() {
    let total = 0;
    for (const value of this) {
      total += value;
    };
    return total;
  }
};
const obj = new Point();
obj.push(10, 20, 30);
console.log(obj.getTotal());




// object 상속
/*
object 는 클래스와 달리 다른 object를 상속받을 수 없지만
상속 받으면 __proto__ 구조가 되는 것을 활용해 상속을 구현할 수 있음
*/
const Book2 = {
  getTitle() {
    console.log("Book");
  }
};
const Point2 = {
  getTitle() {
    super.getTitle(); // super는 한단계 아래의 __proto__를 참조
  }                   // Book2 오브젝트의 getTitle() 을 호출함.
};
Object.setPrototypeOf(Point2, Book2);
Point2.getTitle();