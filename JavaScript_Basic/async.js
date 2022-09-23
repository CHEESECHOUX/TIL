// async 키워드를 붙여주면 항상 promise를 반환함
async function getName() {
  // return 'Jisoo';
  // return Promise.resolve('Jisoo');
  throw new Error('err...');
}

console.log(getName());
getName().then((name) => {
  console.log(name);
});

// getName().catch((err) => {
//   console.log(err);
// });



// await
function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

// await 함수는 async 함수 내부에서만 사용 가능
// 일반 함수에서는 에러
async function showName() {
  const result = await getName('Jisoo'); // await 옆에 promise 함수
  console.log(result);
}

console.log('시작');
showName();



//
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('2번 주문 완료');
      // rej(new Error('err..'));
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문 완료');
    }, 2000);
  });
};

// console.log('시작');
// async function order() { // try catch 문으로 감싸준다
//   try {
//     const result1 = await f1();
//     const result2 = await f2(result1);
//     const result3 = await f3(result2);
//     console.log(result3);
//   } catch (e) {
//     console.log(e);
//   }
//   console.log('종료');
// }
// order();

console.log('시작');
async function order() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log('종료');
}
order();

// // then 사용시
// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .catch(console.log);
