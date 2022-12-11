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


// 2. 표현식이 Promise 가 아닐 때
async function getPoint(option) {
  const value = await option.point + 200;
  console.log(value);
};
getPoint({point: 100});