// this 참조

// 1. 메서드가 속한 클래스 참조
class Point {
  static setPoint(point) {
    this.value = point;
  };
};
Point.setPoint(100);
console.log(Point.value);
console.log(new Point().value);


// 2. static property
class Point2 {
  static value = 100;
};
console.log(Point2.value);
Point2.bonus = 300;
console.log(Point2.bonus);
console.log(new Point2().value);


// 3. this.constructor 참조
class Point3 {
  constructor() {
    console.log(this.constructor.get());
  }
  static get() {
    return 100;
  }
};
new Point3();