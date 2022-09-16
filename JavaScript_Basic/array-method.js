// arr.splice(n, m)
let arr = [1, 2, 3, 4, 5];
// arr.splice(0, 2);
arr.splice(1, 3, 100, 200);

console.log(arr);
// 
let arr2 = ["나는", "지수", "입니다"];
arr2.splice(1, 0, "최고", "짱"); // 아무것도 지우지 않고 요소 추가

// let result = arr2.splice(1,2);

console.log(arr2);
// console.log(result); // 삭제된 요소 반환



// arr.slice(n, m)
let arr3 = [1, 2, 3, 4, 5];
arr3.slice(1, 4);

let arr4 = arr3.slice(); // 아무것도 안 넣으면 배열이 복사됨
console.log(arr4);



// arr.concat(arr2, arr3 ..)
let arr5 = [1, 2];

console.log(arr5.concat([3, 4])); 
console.log(arr5.concat([3, 4], [5, 6]));
console.log(arr5.concat([3, 4], 5, 6));



// arr.forEach(fn)
let arr6 = ['Jisoo', 'susie', 'Tom'];

arr6.forEach((name, index) => {
  console.log(name);
  console.log(`${index + 1}. ${name}`);
});



// arr.indexOf / arr.lastlndexOf
let arr7 = [1, 2, 3, 4, 5, 1, 2, 3];

arr.indexOf(3); // 2 
arr.indexOf(3, 3) // 7

arr.lastIndexOf(3); // 7



// arr.includes()
let arr8 = [1, 2, 3]

arr.includes(2); // true
arr.includes(8); // false



// find, findIndex
let arr9 = [1, 2, 3, 4, 5];

const result = arr9.find((item) => { // item 이 arr9 요소 반환
  return item % 2 === 0; // 리턴값이 true일 때 멈추고 해당 요소 알려줌
});

console.log(result);
//
let userList = [
  { name: "Jisoo", age: 10 },
  { name: "Susie", age: 25 },
  { name: "Tom", age: 30 },
];
// const result2 = userList.find((user) => {
const result2 = userList.findIndex((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result2);



// filter
const arr10 = [1, 2, 3, 4, 5, 6]

const result3 = arr10.filter((item) => {
  return item % 2 === 0;
});

console.log(result3)



// arr.reverse()
let arr11 = [1, 2, 3, 4, 5];

console.log(arr11.reverse());



// arr.map()
let userList2 = [
  { name: "Jisoo", age: 10 },
  { name: "Susie", age: 25 },
  { name: "Tom", age: 30 },
];

let newUserList = userList2.map((user, index) => {
  return Object.assign({}, user, { // assign으로 객체 복사
    id: index + 1,
    isAdult: user.age > 19,
  });
});

console.log(newUserList);



// join
let arr12 = ["안녕", "나는", "지수야"];

//let result4 = arr12.join();
let result4 = arr12.join(" ");

console.log(result4);



// split
const users = "Jisoo, Susie, Tom";

const result5 = users.split(",");

console.log(result5);
//
let str = "Hello, My name is Jisoo.";
const result6 = str.split("");

console.log(result6);



// Array.isArray()
let user = {
  name: "Jisoo",
  age: 29,
};

let userList3 = ["Jisoo", "Susie", "Tom"];

console.log(typeof user); // object로 나옴
console.log(typeof userList); // object로 나옴

console.log(Array.isArray (user)); // false
console.log(Array.isArray (userList)); // true