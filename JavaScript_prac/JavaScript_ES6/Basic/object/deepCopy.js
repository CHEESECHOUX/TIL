// Deep Copy 
// 다단계 계층 구조에서 값이 연동되지 않도록 복사하는 것

// 1. Object를 할당하면 프로퍼티 값이 연동됨
const sports = {
  item: "축구"
};
let copy = sports;
sports.item = "농구"; // sports의 item 프로퍼티 값을 변경
console.log(copy.item);


// 2. assign() 함수로 복사
// (프로퍼티 값을 연동하고 싶지 않을 때)
const sports2 = {
  item: "축구"
};
let copy2 = {};
Object.assign(copy2, sports2);
sports2.item = "농구";
console.log(copy2.item);


// 3. 그래도 연동되는 형태 (Object 안에 Object가 있는 형태)
const book = {
  item: {title: "자바스크립트"}
};
let copy3 = {};
Object.assign(copy3, book);
copy3.item.title = "책";
console.log(book.item.title);
/*
프로퍼티를 복사하는게 아니라
Object 메모리 주소 (Object 참조)를 복사하기 때문에 연동됨.
*/


// 4. 프로퍼티 단위로 복사
const book4 = {
  item: {title: "자바스크립트"}
};
let copy4 = {};
for (let key in book4){ // book4를 읽으면 key의 item
  let value = book4[key]; // {title: "자바스크립트"} 값을 value 변수에 할당
  copy[key] = {};
  for (let name in value){
    copy[key][name] = value[name]; // 프로퍼티 단위로 할당
  };
};
book4.item.title = "책";
console.log(copy.item.title);
/*
프로퍼티 단위로 복사하면 연동되지 않지만 
단계의 깊이가 유동적이면 for문으로 반복할 수 없고 코드가 복잡해짐
*/


// 5. JSON 함수 활용
const book5 = {
  item: {title: "자바스크립트"}
};
const copy5 =
  JSON.parse(JSON.stringify(book5));
book5.item.title = "책";
console.log(copy5.item.title);
/*
JSON.stringify()로 book 오브젝트를 문자열로 변환 후
JSON.parse()로 문자열을 파싱하면 연동되지 않음.
*/