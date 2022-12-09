// race()
// resolve, reject 에 관계없이 처음 한 번만 then() 을 실행
function order(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(delay);
      resolve(delay);
    }, delay);
  });
};
Promise.race([order(500), order(100), order(300)])
        .then((param) => console.log("then" + param));