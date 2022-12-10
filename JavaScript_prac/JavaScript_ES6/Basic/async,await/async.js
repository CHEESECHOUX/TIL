// async 함수

// 1. asyncFunction 오브젝트를 생성해 반환
async function sports() {
  return "축구";
};
console.log(Object.prototype.toString.call(sports));


// 2. async 함수가 호출되면 Promise 인스턴스를 반환
async function sports() {
  return "축구";
};
const obj = sports();
console.log(obj instanceof Promise);
/*
실행 결과
true


const obj = sports();
async 함수를 호출하면 "축구" 를 반환하는게 아니라 Promise 인스턴스를 반환
*/


// 3. async 함수의 return 값을 처리하려면 then() 을 함수 호출에 연결해 작성
async function sports() {
  return "축구";
};
sports().then((res) => console.log(res)); // then 이 아닌 아래 코드부터 실행
console.log("여기 먼저");

/*
1.resolve() 를 작성하지 않았지만 return 문의 표현식 평가 결과를 resolve() 의 파라미터 값으로 사용해
  then() 의 첫 번째 파라미터 함수를 호출함

2.return 문의 표현식 평가 결과가 then() 의 첫 번째 파라미터 함수의 res 파라미터에 설정
*/


// 4. async 함수에서 throw 가 발생하면 reject() 로 처리
async function sports() {
  throw "에러"; // reject() 로 처리
};
sports().then(() => 0, (rej) => console.log(rej)); // then() 의 두 번째 파라미터 함수가 호출돼 표현식의 평가 결과가 rej에 설정