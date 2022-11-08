// function 블록

// let sports = "축구";
// function show() {
//   let sports = "농구";
//   console.log("안: ", sports);
// };
// show();
// console.log("밖: ", sports);


// let sports = "축구";
// function show() {
//   console.log(sports);
// };
// show();




// try-catch

// let sports = "축구";
// try {
//   let sports = "농구";
//   console.log("안: ", sports);
// } catch(e) {};
// console.log("밖: ", sports);


// catch는 try 밖의 변수 사용

// let sports = "축구";
// try {
//   let sports = "농구";
//   console.log("안: ", sports);
//   abc = error;
// } catch(e) {
//   console.log("catch: ", sports);
// };
// console.log("밖: ", sports);




// switch-case

let item = 1;
switch (item) {
  case 1:
    let sports;
    break;
  case 2:
    // let sports; 블록 내에서 같은 이름 변수 선언하면 에러
  default:
    console.log(sports);
};