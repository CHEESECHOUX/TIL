// getter, setter static 메서드

// getter 메서드를 호출해 값을 구함
class Point {
  constructor(point){
    this.point = point;
  }
  get getPoint(){
    return this.point;
  }
};
const obj = new Point(100);
console.log(obj.getPoint);


// setter 메서드를 호출해 값을 설정
class Point2 {
  set setPoint(point2){ // 값을 설정해야하니까 파라미터 사용가능
    this.point = point2;
  }
};
const obj2 = new Point2(); 
obj2.setPoint = 100;
console.log(obj2.point);




// static 메서드
// 클래스 메서드에 직접적으로 연결되어 인스턴스를 만들 수 없음
// 클래스.static 메서드 이름으로 호출 가능

// 1. static 메서드 작성 방법
class Point3 {
  static getPoint(){ // 정적 메서드
    return 100;
  }
};
console.log(Point3.getPoint());

/*
ES5 에서는 함수, 메서드만 구분했지만
ES6 에서는 함수, 메서드, static 메서드를 구분해야함.

클래스만 static 메서드 사용 가능.
*/


// 2. static 메서드의 구조적 특징
class Point4 {
  static getPoint(){
    return 100;
  }
};
const obj4 = new Point4();
console.log(obj4.getPoint); // undefined
console.log(Point4.getPoint());
/*
obj 인스턴스에 static 메서드가 설정되지 않음.

new 연산자로 인스턴스를 생성하면 Point.prototype 에 있는 메서드로 인스턴스를 만들고,
static 메서드는 Point 에 바로 연결되기 때문에
*/