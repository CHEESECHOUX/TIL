// set()
// 1. 다양한 타입을 key 로 사용할 수 있음
let obj = new Map();
obj.set("one", 100);
obj.set({}, "오브젝트");
obj.set(function(){}, "Function");
obj.set(new Number("100"), "인스턴스");
obj.set(NaN, "Not a Number");

for (let [key, value] of obj){
  console.log(`${key} : ${value}`);
};

// 2. key 값이 같으면 value가 바뀜
let obj2 = new Map();
const book = {};
obj2.set(book, "첫 번째");
obj2.set(book, "두 번째");
for (let [key, value] of obj2){
  console.log(`${key} : ${value}`);
};
// book 오브젝트의 메모리 주소와 같은 key 값이 있어 값이 대체됨.




// get()
/*
1. Map 에서 key 값이 같은 value 반환
  key 값이 같지 않거나 타입이 다르면 undefined 반환
*/
let obj3 = new Map([
  ["one", 100],
  ["200", "String 타입"]
]);
console.log(obj3.get("one"));
console.log(obj3.get("two"));
console.log(obj3.get(200));

// 2. 오브젝트 설정과 추출
let obj4 = new Map();
const like = {sports: "스포츠"};
obj4.set(like, {value: "농구"});
console.log(obj4.get(like));




// has()
// Map 인스턴스에서 key의 존재 여부 반환
const obj5 = new Map([
  ["one", 100]
]);
console.log(obj5.has("one"));
console.log(obj5.has("two"));