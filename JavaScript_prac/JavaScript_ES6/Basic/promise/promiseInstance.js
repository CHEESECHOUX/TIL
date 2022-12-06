// promise 인스턴스 생성
// new Promise()
const obj2 = 
new Promise((resolve, reject) => {
  resolve("성공");
  reject("실패");
});
obj2.then((value) => { console.log(value) },
          (reason) => { console.log(reason) });
console.log("끝");