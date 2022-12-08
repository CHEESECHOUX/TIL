// 1. producer
// 새로운 promise 가 만들어 질 때는 executor 콜백 함수(resolve, reject) 가 자동으로 실행됨.
const promise = new Promise((resolve, reject) => {
  // 보통 무거운 작업을 수행 (네트워크에서 데이터를 받아오거나, 파일에서 큰 데이터를 읽어오는)
  console.log("doing something...");
  setTimeout(() => {
    resolve("jisoo");
    // reject(new Error("no network"))
  }, 2000);
});


// 2. Consumers: then, catch, finally
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally")
  });


// 3. Promise chaining (promise then으로 연결하기)
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

// 한가지 함수만 받아서 전달하는 경우 생략 가능
getHen()
.then(getEgg)
.catch(error => {
  return "🥖";
})
.then(cook)
.then(console.log)
.catch(console.log);