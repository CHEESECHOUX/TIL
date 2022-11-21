// entries()

// 1. 열거 가능한 오브젝트의 {key: value}를 [[key, value]]형태로 변환
const obj = {music: "음악", book: "책"};
const list = Object.entries(obj);
// console.log(list);
for (let keyValue of list){
  console.log(keyValue);
};

// 2. 작성한 순서가 바뀌는 경우
const obj2 = {10: "십", book: "책", 7: "칠"};
const list2 = Object.entries(obj2);
for (let keyValue of list2){
  console.log(keyValue);
};
/*
key가 영문자면 작성한대로 반환
key가 숫자, 문자가 섞여 있으면 숫자, 문자 순서대로 분류 후 반환
*/

// 3. 문자열 분리
const list3 = Object.entries("ABC");
for (let keyValue of list3){
  console.log(keyValue);
};