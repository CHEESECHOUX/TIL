// 이터러블 프로토콜과 이터러블 오브젝트

const list = [10, 20];
console.log(list[Symbol.iterator]);

const obj = { one: 10, two: 20 };
console.log(obj[Symbol.iterator]);

/*
실행 결과
function values() {[native code]}
undefined


[] 리터럴로 생성한 list에 Symbol.iterator가 있음.(구조상) = 이터러블 오브젝트
{} 리터럴로 생성한 obj에 Symbol.iterator가 없음. = 이터러블 오브젝트가 아님

자체 오브젝트에 없으면 이터러블 오브젝트를 상속 받아도 됨.
= prototype chain(__proto__)에 있으면 됨.
*/