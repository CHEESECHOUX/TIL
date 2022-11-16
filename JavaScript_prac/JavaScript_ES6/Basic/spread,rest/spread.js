// spread
const list = [21, 22];
console.log([11, ...list, 12]);

const obj = { key: 50 };
console.log({ ...obj });




// Array spread
const one = [21, 22];
const two = [31, 32];
const result = [11, ...one, 12, ...two];
console.log(result);
console.log(result.length);

// 앞에 같은 값이 있어도 대체되지 않고 전개
const one2 = [11, 12];
const result2 = [11, 12, ...one2];
console.log(result2);
console.log(result2.length);




// String spread : element 단위로 분리
const target = "ABC";
console.log([...target]);




// Object spread : property 단위로 전개
const one3 = { key1: 11, key2: 22 };
const result3 = { key3: 33, ...one3 };
console.log(result3);

// property 값 대체
const one4 = { book: 10, music: 20 };
const result4 = { book: 30, ...one4 };
console.log(result4);
/*
{ book: 30 } 과 { book: 10 } property 이름이 같아
나중에 작성한 { book: 10 } 으로 대체됨
*/




// push(...spread)
let result5 = [21, 22];
const five = [51, 52];
result5.push(...five);
console.log(result5);

result5.push(..."abc");
console.log(result5);