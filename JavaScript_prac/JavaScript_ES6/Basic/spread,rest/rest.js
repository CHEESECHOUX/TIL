//spread는 분리, rest는 결합

// function spread
function add(one, two, three) {
  console.log(one + two + three);
};

const values = [10, 20, 30];
add(...values);
/*
1.함수가 호출되면 파라미터의 배열을 엘리먼트 단위로 전개
  add(10, 20, 30)
2.전개한 순서대로 파라미터 값을 넘겨줌
3.호출받는 함수의 파라미터에 순서대로 매핑됨
*/




// rest 파라미터

// 분리해서 받은 파라미터를 배열로 결합
function point(...param) { // 2. 다시 결합해 배열로 다시 만듦
  console.log(param);
  console.log(Array.isArray(param));
};
const values2 = [10, 20, 30];
point(...values2); // 1. 분리

// 파라미터와 rest 파라미터 함께 사용
function point(ten, ...rest) {
  console.log(ten);
  console.log(rest);
};
const values3 = [10, 20, 30];
point(...values3)




/* Array-like
Object 타입이지만 배열처럼 이터러블 가능한 오브젝트
for() 문으로 전개할 수 있음
*/
const values4 = { 0: "가", 1: "나", 2: "다",
                length: 3 };
for (let k = 0; k < values4.length; k++) {
  console.log(values4[k]);
};
/*
for 문으로 전개하면 length 프로퍼티는 전개되지 않음.
for in 문으로 전개하면 length 프로퍼티도 전개됨.
*/