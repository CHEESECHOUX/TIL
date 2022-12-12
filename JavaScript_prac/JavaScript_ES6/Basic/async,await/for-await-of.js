// for-await-of

// 1. 동기 반복에 사용 가능
const list  = [10, 20];
async function show() {
  for await (const value of list) {
    console.log(value);
  };
};
show();


// 2. 일반적으로 비동기 반복에 사용함
async function* point() {
  yield 10;
  yield 20;
};
async function show() {
  for await (const value of point()) {
    console.log(value);
  };
};
show();