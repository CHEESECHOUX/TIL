// async/await
function create(param) {
  return new Promise((resolve) => {
    resolve(param); // resolve 가 실행되지 않고 아래 코드 실행
  });
};
async function getPoint(option) {
  const value = await create(option); // await 은 아래에 있는 콘솔로그를 출력하지 않고 resolve 가 끝나는 것을 기다림
  console.log(value);                 // resolve 가 실행되면 param 값을 option 에 전달해줌, value 변수가 받아서 출력
};
getPoint({point: 100});
