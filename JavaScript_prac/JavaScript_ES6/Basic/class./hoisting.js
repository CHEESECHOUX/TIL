// 호이스팅

// 1. 클래스는 호이스팅 되지 않음
// 클래스 키워드가 작성된 위치에서 클래스 이름 선언과 오브젝트 생성을 동시에 하기 때문에
try {
  const obj = Point; // Point 클래스 참조할 수 없어 에러
} catch {
  console.log("호이스팅 불가");
};

class Point { // 아래에서 선언했기 때문에 위에서 참조 불가
  static getPoint() {
    return 100;
  }
};
console.log(Point.getPoint());




// new.target
// 함수 or 생성자가 new 연산자로 호출 되었는지 아닌지를 알 수 있음
// 1. constructor 를 호출
class Point2 {
  constructor(){
    console.log(new.target.name);
  }
};
new Point2();
/*
1.new Point2 로 인스턴스를 만들면 constructor를 호출함.
2.new.target 은 constructor 를 참조함.
3.constructor 가 클래스를 참조하니까 name 프로퍼티 값으로 Point 가 출력됨.
*/


// 2. 함수 호출
function book() {
  console.log(new.target);
};
book(); // new 연산자를 사용하지 않고 단순히 함수로 호출하면 undefined