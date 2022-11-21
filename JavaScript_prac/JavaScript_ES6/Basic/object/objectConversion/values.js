// values()
// 프로퍼티에서 프로퍼티 값을 이터러블 오브젝트로 반환

// 1. 열거 가능한 오브젝트의 {key: value}를 값만 [value1, value2] 형태로 변환
const obj = {music: "음악", book: "책"};
const list = Object.values(obj);
for (let value of list){
  console.log(value);
};

// 2. 정렬하여 반환
const obj2 = {10: "십", book: "책", 7: "칠"};
const list2 = Object.values(obj2);
for (let value of list2){
  console.log(value);
};
// key에 숫자, 문자가 섞여 있으면 숫자, 문자 순서로 분류함.

// 3. 문자열은 문자 하나씩 분리
const list3 = Object.values("ABC");
for (let value of list3){
  console.log(value);
};