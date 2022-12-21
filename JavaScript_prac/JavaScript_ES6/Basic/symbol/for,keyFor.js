// for(), keyFor()

// 1. Symbol.for()
const one = Symbol.for("sports");
console.log(one);


// 2. 글로벌 Symbol 레지스트리
const one2 = Symbol.for("sports");
const two2 = Symbol.for("sports");
console.log(one2 === two2);

console.log(Symbol.for(true));




// keyFor()

// 1. 파라미터에 Symbol.for() 로 등록한 Symbol 작성
const one1 = Symbol.for("book");
const six1 = Symbol.keyFor(one1);
console.log(six1);