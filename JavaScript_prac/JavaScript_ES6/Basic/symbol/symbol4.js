// Symbol 사용 형태

// 1. for-in 문
const obj = {
  [Symbol("100")]: 100,
  two: 200
};
for (let key in obj) {
  console.log(key);
};


// 2. for-of 문
const list = [Symbol("100")];
for (let value of list) {
  console.log(value);
};


// 3. JSON.stringify()
const sym2 = Symbol("JSON");
const result =
      JSON.stringify({[sym2]: "ABC"});
console.log(result);