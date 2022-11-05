// 전개 구문 : 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [0, ...arr1, ...arr2, 7, 8, 9];

console.log(result);

// 전개 구문 : 객체
let user4 = {name: 'Jisoo'}
let choijisoo = {...user4, age: 29}

console.log(choijisoo)

// 전개 구문 : 복제
let arr3 = [1, 2, 3];
let arr4 = [...arr3];

let user5 = {name: 'Susie', age: 30};
let user6 = {...user5};

user6.name = "Tom";

console.log(user5.name); 
console.log(user6.name); // user5 name에는 영향을 미치지 않음



// 전개 구문 배열
// arr5를 [4, 5, 6, 1, 2, 3] 으로
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];

// arr6.forEach((num) => { // [6, 5, 4, 1, 2, 3]
//   arr5.unshift(num);
// });

// arr6.reverse().forEach((num) => {
//   arr5.unshift(num);
// });

arr5 = [...arr6, ...arr5];

console.log(arr5);



// 전개 구문 객체
let user7 = { name: 'Jisoo' };
let info = { age: 30 };
let fe = ['JS', 'node'];
let lang = ['Koeran', 'English'];

// user7 = Object.assign({}, user7, info, {
//   skills: [],
// });
// 
// fe.forEach((item) => {
//   user7.skills.push(item);
// });
// lang.forEach((item) => {
//   user7.skills.push(item);
// });

user7 = {
  ...user7,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user7);