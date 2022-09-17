// arr.sort()
let arr = [1, 5, 4, 2, 3];

arr.sort();

console.log(arr);

// sort는 인수로 정렬 로직을 담은 함수를 받음
let arr2 = [27, 8, 5, 13];

function fn(a, b) {
  console.log(a, b);
  return a - b; // 크기를 비교해서 작은 숫자가 앞으로 오게
}

arr2.sort(fn);
// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

console.log(arr2);



// arr.reduce()
let arr3 = [1, 2, 3, 4, 5];

// 배열의 모든 수 합치기 : for, for of, forEach
let result = 0; // 초기값 0
arr3.forEach(num => {
  result += num;
});

console.log(result);

// 한 번에 reduce로 처리
const result2 = arr3.reduce((prev, cur) => { // 현재까지 누적된 값, 현재값
  return prev + cur; // 누적된 값 + 현재값
}, 0) // 초기값 0

console.log(result2);

// map이나 filter 대신 reduce를 사용해 배열 반환
let userList = [
  { name: "Jisoo", age: 20 },
  { name: "Susie", age: 10 },
  { name: "Tom", age: 15 },
  { name: "Jane", age: 8 },
  { name: "Harry", age: 40 },
  { name: "Steve", age: 29 },
  { name: "Soo", age: 37 },
];

let result3 = userList.reduce((prev, cur) => {
  if (cur.age > 19){
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result3);


let result4 = userList.reduce((prev, cur) => {
  return (prev += cur.age);
}, 0)

console.log(result4);


let result5 = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result5);