/* 
화살표 함수와 인스턴스
화살표 함수의 작성 위치에 따라 this가 참조하는 오브젝트가 다름
*/

// prototype에 메서드로 작성 
var point = 200;
const Point = function() {
  this.point = 100;
};
Point.prototype.getPoint = () => {
  console.log(this.point);
};
new Point().getPoint();

// this는 글로벌 오브젝트를 참조함


// prototype의 메서드 안에 작성
const Point2 = function() {
  this.point = 100;
};
Point2.prototype.getPoint = function() {
  const add = () => this.point + 20;
  console.log(add());
  [1, 2].forEach((value) => {
    console.log(this.point + value);
  })
};
new Point2().getPoint();
/*
실행 결과
120
101
102

prototype에 일반 함수를 연결하고 함수 안에 화살표 함수를 작성한 형태
1.getPoint()가 일반 함수이므로
  this가 생성한 인스턴스를 참조하게 됨
2.화살표 함수에서도
  this가 생성한 인스턴스를 참조함
  = 화살표 함수는 자기가 속한 스코프(getPoint 메서드)의 this를 사용함
  = 화살표 함수의 스코프인 getPoint() 메서드의 this가 생성한 인스턴스를 참조함
*/