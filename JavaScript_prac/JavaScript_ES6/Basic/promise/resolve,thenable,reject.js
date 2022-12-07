// resolve
// 1. resolve() 파라미터에 값 작성
const obj = Promise.resolve(
  ["sports", "music"]
);
obj.then((value) => { console.log(value) });
console.log("끝");


// 2. 파라미터에 Promise 인스턴스 작성
const obj2 = Promise.resolve(
  ["sports", "music"]
);
Promise.resolve(obj2).then((param) => {
  console.log(param);
});




// thenable
const obj3 = Promise.resolve({
  then(resolve, reject){
    resolve([1, 2]);
  }
});
obj3.then((value) => { console.log(value) });
console.log("끝");




// reject
// 1. then()을 사용한 형태
const obj4 = Promise.reject("실패");
obj4.then(
  (value) => console.log(value),
  (value) => console.log(value)
);

// 2. catch()를 사용한 형태
const obj5 = new Error("에러 발생");
Promise.reject(obj5).catch(
  (error) => console.log(error.message)
);
console.log("끝");