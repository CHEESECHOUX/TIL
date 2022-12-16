// Symbol 사용 형태

// 1. symbol-keyed property
const sym = Symbol("설명");
const obj = {[sym]: 100};


// 2. 프로퍼티 값 추출
const sym2 = Symbol("설명");
const obj2 = {[sym]: 100};
console.log(obj[sym]);
console.log(obj.sym);


// 3. 함수 이름으로 사용
const sym3 = Symbol("함수 이름");
const obj3 ={
  [sym](param) {
    return param;
  }
};
console.log(obj3[sym](200));