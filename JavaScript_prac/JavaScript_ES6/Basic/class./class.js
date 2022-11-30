// class 선언문
class Point {
  getPoint(){
    return 100;
  }
};
const obj = new Point();
console.log(obj.getPoint());




// class 표현식
const Point2 = class {
  getPoint(){
    return 100;
  }
};
const obj2 = new Point2();
console.log(obj2.getPoint());




// 함수
// 1. 인스턴스를 생성하지 않고 직접 호출
console.log(Array.isArray([]));

const point = {
  getPoint(){
    return 100;
  }
};
console.log(point.getPoint());


// 메서드
// 인스턴스를 사용하여 호출하는 함수. prototype에 연결되어 있음

// 2. 클래스에 작성한 함수
class Point3 {
  getPoint(){
    return 100;
  }
};
const obj3 = new Point3();
console.log(obj3.getPoint());


// 3. prototype에 연결된 function
const Point4 = function(){};
Point4.prototype.getPoint = function(){
  return 100;
};
const obj4 = new Point4();
console.log(obj4.getPoint());


// 4. 빌트인 오브젝트
const list = [];
list.push("책");
console.log(list);




// 메서드 작성 방법
class Point5 {
  setPoint(point5){
    this.point5 = point5;
  }
  getPoint(){
    return this.point5;
  };
};
console.log(typeof Point5);




// computed name
// 메서드 이름 조합
const name = "Point6";
class Point6 {
  static ["get" + name](add){ // 메서드 이름이 getPoint 가 됨
    return add ? 100 : 50;
  }
};
console.log(Point6["get" + name](true));



// class 작성 기준
// 1. prototype에 연결하지 않음
const Point7 = class {
  setPoint(point7){
    this.point7 = point7;
  }
};
console.log(Point7.prototype.setPoint);


// 2. 클래스 밖에서 메서드 연결
const Point8 = class { };
const obj8 = new Point8();
Point8.prototype.getPoint = function(){
  return 100;
};
console.log(obj8.getPoint());