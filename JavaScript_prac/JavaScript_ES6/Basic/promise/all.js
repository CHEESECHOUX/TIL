// all()

// 1. 작성한 순서로 Promise 인스턴스 생성
function order(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("실행자:", delay);
      resolve(delay);
    }, delay);
  });
};
Promise.all([order(500), order(300), order(100)])
        .then((param) => console.log("then: " + param));

// order 3개를 모두 실행한 후에 then() 을 한 번만 호출함


// 2. 실행자에서 실패가 발생했을 때
// all() 은 한 개의 파라미터라도 reject() 가 발생하면 then() 의 첫 번째 파라미터 함수를 실행하지 않음.
function order(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(delay);
      delay === 300 ? reject(delay) : resolve(delay); // 위의 코드와 달리 reject 가 있음
    }, delay); 
  });
};
Promise.all([order(500), order(100), order(300)])
        .then((param) => console.log("성공:" + param),
              (param) => console.log("실패:" + param));




