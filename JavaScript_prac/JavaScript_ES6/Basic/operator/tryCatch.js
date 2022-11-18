// try-catch

const sports = "스포츠";
try {
  sports = "축구";
} catch(error){
  console.log("(error) 작성")
};
// catch만 작성
try {
  sports = "축구";
} catch { // try-catch의 catch에서 소괄호를 포함한 파라미터 이름을 생략할 수 있음
  console.log("(error) 생략")
};