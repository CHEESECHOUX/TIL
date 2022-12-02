// 상속
// 클래스에 다른 클래스를 포함 시키는 형태

// extends 키워드로 상속 구현
class Book {
  constructor(title){
    this.title = title;
  };
  getTitle() {
    return this.title;
  }
};
class Point extends Book {
  setPoint(point) {
    this.point = point;
  }
};
const obj = new Point("책");
console.log(obj.getTitle());


/*
Point 클래스에서 Book 클래스를 상속받아 서브와 슈퍼 구조를 만듦.
(Book.prototype 에 연결된 메서드를 Point.prototype 에 구조적으로 연결함)

인스턴스마다 프로퍼티를 가져가고, 그 프로퍼티는 고유의 값을 갖는 것이 가장 큰 목적임.
(상속은 인스턴스 프로퍼티를 지원하기 위한 수단일 뿐)
*/
