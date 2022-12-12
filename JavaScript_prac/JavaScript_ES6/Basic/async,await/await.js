// await
// 단독으로 작성할 수 없음! async 함수 안에 작성

// 1. 표현식이 Promise 오브젝트면 resolve() 의 파라미터 값을 반환
function create(param) {
  return new Promise((resolve) => {
    resolve(param);
  });
};
async function getPoint(option) {
  const value = await create(option);
  console.log(value);  
};
getPoint({point: 100});
/*
await 이 없다면 value 에 Promise 인스턴스가 할당됨
await 이 있으니 value 에 resolve 의 param 값이 할당됨
*/


// 2. 표현식이 Promise 가 아닐 때
async function getPoint(option) {
  const value = await option.point + 200;
  console.log(value);
};
getPoint({point: 100});
/*
await 표현식이 Promise 오브젝트가 아니면 표현식의 평가 결과를 반환함.

option.point 가 100 이니까 value 에 300 할당

await 은 비동기 환경에서 동기처리를 위한 것이므로
표현식이 비동기처리가 아니면 굳이 (위의 코드에서) 사용하지 않아도 됨.
*/