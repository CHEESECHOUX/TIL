// Symbol()

// 1. 파라미터에 주석, 설명을 작성
const sym = Symbol("주석, 설명");
console.log(sym);


// 2. 문자열로 연결
const sym2 = Symbol("설명");
console.log(sym2.toString() + "연결");


// 3. Template 에 사용
const sym3 = Symbol("주석, 설명");
try {
  `${sym3}`
} catch {
  console.log("`${sym3} 불가`");
};