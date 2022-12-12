// Promise 에서 reject() 가 발생했을 때 에러에 대처하는 형태

const { reject } = require("async");

// 1. try-catch 사용
function create(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
};
async function getPoint(option) {
  try {
    await create(option);
  } catch(error) {
    console.log(error);
  };
};
getPoint({point: 100});


// 2. catch() 를 사용
function create(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
};
async function getPoint(option) {
  await create(option).catch((value) => {
    return 300;
  }).then((param) => {
    console.log(param);
  });
};
getPoint({point: 100});


// 3. Promise 가 아닌 값을 반환하는 형태
function create(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
};
async function getPoint(option) {
  const value =
  await create(option).catch((value) => {
    return 300;
  });
  console.log(value);
};
getPoint({point: 100});

// catch() 에 then() 이 연결되어 있지 않아 인스턴스가 아닌 300 반환