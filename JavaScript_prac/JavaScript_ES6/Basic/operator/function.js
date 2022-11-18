// 함수 작성 형태

// Object에 함수를 작성할 때 function을 작성하지 않음
const sports = {
  point: 100,
  // ES5 형태
  getValue: function(){
    return this.point;
  },
  // ES6 형태
  getPoint(){ // 콜론과 function 키워드를 생략하고 함수 이름만 작성해도 됨
    return this.point;
  }
};
console.log(sports.getPoint());

/*
Object에 함수를 작성하는 이유
함수에서 this로 Object 전체를 참조할 수 있기 때문에
= Object 전체가 하나의 묶음으로 접근성, 가독성이 좋음
*/