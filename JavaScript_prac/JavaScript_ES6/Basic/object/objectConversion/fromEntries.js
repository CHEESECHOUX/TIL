// fromEntries

// 1. [[key, value]] 형태를 {key: value} 형태로 변환
const list = [["one", 10], ["two", 20]];
const obj = Object.fromEntries(list);
console.log(obj);

// 2. 프로퍼티 키 값이 같은 경우
const list2 = [["one", 10], ["one", 20]];
const obj2 = Object.fromEntries(list2);
console.log(obj2);