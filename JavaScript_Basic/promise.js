// promise 구조
// 어떤 일이 완료 된 후 실행되는 함수 = callback
const pr = new Promise((resolve, reject) => { // 성공한경우, 실패한 경우의 인수
  // code
});

// pr.then(
//   function(result){},
//   function(err){}
// );

pr.then(
  function(result){}
).catch(
  function(err){} // 두 번째로 동작하는 함수를 catch에 넣어줌
).finally(        // 이행이든 거부든 처리 완료시 실행
  function() {
    console.log('--- 주문 끝 ---')
  }
)



//
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK')
  }, 8000)
});

pr2.then(
  function(result){
    console.log(result + '준비 완료 되었습니다.');
  },
  function(err){
    console.log('다시 주문 부탁드립니다.');
  }
);



//
const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 10000);
});

// const pr3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('err...'));
//   }, 1000);
// });

console.log('시작');
pr3.then((result) => {
  console.log(result);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('끝')
  });



// callback 함수
const f1 = (callback) => {
  setTimeout(function () {
    console.log('1번 주문 완료');
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(function () {
    console.log('2번 주문 완료');
    callback();
  }, 2000);
};

const f3 = (callback) => {
  setTimeout(function () {
    console.log('3번 주문 완료');
    callback();
  }, 3000);
};

console.log('시작');
f1(function () { // 콜백 지옥
  f2(function () {
    f3(function () {
      console.log('끝');
    });
  });
});



// promise
const f4 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
    }, 10000);
  });
};

const f5 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res('2번 주문 완료');
      rej(new Error ('xxx'));
    }, 10100);
  });
};

const f6 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문 완료');
    }, 10200);
  });
};

// 프로미스 체이닝 (Promises chaining)
console.log('시작');
f4()
  .then((res) => f5(res))
  .then((res) => f6(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.log('끝');
  })// 2번째 주문을 rej로 출력시
// 1번 주문 완료
// xxx 
// 끝


// Promise.all
// 한꺼번에 시작하고 모두 이행되면 값을 사용할 수 있음
// 하나의 정보라도 누락된 경우(에러) 모든 값을 안 보여줌
console.time("x"); // 소요 시간 재기
Promise.all([f4(), f5(), f6()]).then((res) => {
  console.log(res);
  console.timeEnd('x');
});


// Promise.race
// all은 모든 작업이 완료될 때까지 기다림 
// race는 제일 빠른 작업 하나 완료시 종료
console.time("x");
Promise.race([f4(), f5(), f6()]).then((res) => {
  console.log(res);
  console.timeEnd('x');
});