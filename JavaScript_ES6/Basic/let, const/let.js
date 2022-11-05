// let

// let sports = "축구";
// if (sports) {
//   let sports = "농구";
//   console.log("안: ", sports);
// };
// console.log("밖: ", sports);




// 변수 이름 선언

// let book; // 값 할당 안 해도 됨
// let one, two; // 여러 변수 선언 가능
// console.log(book); // 초기값은 undefined


// 변수에 초기값 할당

// let book = "책";
// let one = 1, two = (10 + 20);
// // let five = 5, let six = 6; // SyntaxError




// 블록 스코프

// let sports = "축구";
// if (sports) {
//   let sports = "농구";
//   console.log("안: ", sports);
// };
// console.log("밖: ", sports);


let sports = "축구";
sports = "농구";
console.log(sports);
// let sports = "배구"; // SyntaxError
{
  let sports = "탁구";
  console.log(sports);
};