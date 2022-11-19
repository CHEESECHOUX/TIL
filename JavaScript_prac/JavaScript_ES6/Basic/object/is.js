// is()
const result = Object.is(10, "10");
console.log(result);

const one = {}, two = {};
console.log(Object.is(one, two));




// JS 값 비교 방법
console.log((undefined == null));
console.log((undefined === null));
console.log(Object.is(undefined, null));




// NaN 비교
console.log((NaN === NaN));
console.log(Object.is(NaN, NaN));
console.log((NaN === 0 / 0));
console.log(Object.is(NaN, 0 / 0));




// +0 과 -0 비교
console.log((0 === -0));
console.log((Object.is(0, -0)));




// 활용 형태
function check(data){
  if (Object.is(typeof data, "object")){
    console.log(data);
  } else {
    console.log("object 타입이 아님");
  };
};
check({value: 10});
check(200);