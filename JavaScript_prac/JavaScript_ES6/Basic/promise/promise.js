// promise 처리 흐름 개요
const obj = 
new Promise((resolve, reject) => {
  resolve();
  console.log("Promise");
});
obj.then((value) => {
  console.log("성공");
}, (reason) => {
  console.log("실패");
});
console.log("마지막");