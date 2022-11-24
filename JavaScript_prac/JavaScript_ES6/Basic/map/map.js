// Map 오브젝트
// key로 다양한 타입을 사용할 수 있음

const obj = new Map([
  ["key", "value"],
  [{book: 200}, "오브젝트"],
  [100, "Number"]
]);
for (let keyValue of obj){
  console.log(keyValue);
};




// new Map()

// 1. 파라미터에 이터러블 오브젝트 작성
const obj2 = new Map([
  ["key", "value"],
  [100, "Number"]
]);
console.log(obj2);
console.log(typeof obj2);


// 2. SameValueZero 비교
const obj3 = new Map([
  [100, "Number"],
  ["100", "String"]
]);
for (let [key, value] of obj3){
  console.log(`${key} : ${value}`);
};


// 2-1. key 값이 같으면 value가 대체됨
const obj4 = new Map([
  [100, "첫 번째"],
  [100, "두 번째"]
]);
for (let [key, value] of obj4){
  console.log(`${key} : ${value}`);
};


// 3. 잘 못 작성한 형태
try {
  new Map(["one", 1]);
} catch {
  console.log("[[one, 1]]");
};
const obj5 = new Map([{five: 5}]);
for (let [key, value] of obj5){
  console.log(`${key} : ${value}`);
};