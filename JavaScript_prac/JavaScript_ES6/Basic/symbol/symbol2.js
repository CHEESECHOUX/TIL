// Symbol()

// 1. 파라미터에 주석, 설명을 작성
const sym = Symbol("주석, 설명");
console.log(sym);


// 2. 프로퍼티 값 추출
const sym = Symbol("주석, 설명");
console.log(sym);
console.log(obj[sym]);
console.log(obj.sym);