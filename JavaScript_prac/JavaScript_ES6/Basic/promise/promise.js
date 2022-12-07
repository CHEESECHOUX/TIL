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




// 1. producer
const promise = new Promise((resolve, reject) => {
  // 보통 무거운 작업을 수행 (네트워크에서 데이터를 받아오거나, 파일에서 큰 데이터를 읽어오는)
  console.log("doing something...");
});