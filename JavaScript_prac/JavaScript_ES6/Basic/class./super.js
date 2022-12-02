// super 키워드
// super 키워드를 사용해 슈퍼 클래스의 메서드를 호출 할 수 있음
class Book {
  getTitle(){
    console.log("슈퍼")
  }
};
class Point extends Book {
  getTitle(){
    super.getTitle(); // 여기만 호출되는데 super 키워드로 슈퍼 클래스의 getTitle 호출
    console.log("서브")
  }
};
new Point().getTitle();




// constructor 호출
// constructor 를 서브, 슈퍼 모두 작성 안 함
class Book2 {
  setTitle(title) {
    this.title = title;
  }
};
class Point2 extends Book2 {
};
const obj2 = new Point2();
obj2.setTitle("책");
console.log(obj2.title);


// constructor 를 슈퍼에만 작성
class Book3 {
  constructor(title) {
    this.title = title;
  };
};
class Point3 extends Book3 {
};
const obj3 = new Point3("책");
console.log(obj3.title);


// constructor 를 서브에만 작성하면 에러 발생
class Book4 {
  setTitle(title) {
    this.title = title;
  }
};
class Point4 extends Book4 {
  // constructor(point) {
  //   this.point = point;
  // };
};
const obj4 = new Point4(100);


// constructor 를 서브, 슈퍼 모두 작성하면 서브에서 호출해야함
class Book5 {
  constructor(title) {
    this.title = title;
  };
};
class Point5 extends Book5 {
  constructor(title, point) {
    super(title);
    this.point = point;
  };
};
const obj5 = new Point5("책", 100);
console.log(`${obj5.title}, ${obj5.point}`);