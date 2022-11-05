// Computed property
let n = "name";
let a = "age";

const user1 = {
  [n]: "Jisoo",
  [a]: "29",
};

console.log(user);



//
function makeObj(key, val) {
  return {
    [key]: val,
  };
}

const obj = makeObj("이름", "Jisoo");

console.log(obj);



// Methods
const user = {
  name: 'Jisoo',
  age: 29,
};

// 객체 복제
const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user);
console.log(user2);

// 키 배열 반환
const result = Object.keys(user);

console.log(result);



// 키, 값 배열을 객체로
let arr = [
  ['mon', '월'],
  ['tue', '화']
]

const result2 = Object.fromEntries(arr)

console.log(result2);