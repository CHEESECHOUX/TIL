//  배열 구조 분해
let users = ['Jisoo', 'Susie', 'Soo'];

let [user1, user2, user3] = users;
// let user1 = users[0]; // 이 코드와 똑같음
// let user2 = users[1];
// let user3 = users[2];

console.log(user1);
console.log(user2);
console.log(user3);



// 문자열을 split을 활용해 구조 분해
let str = "Jisoo-Susie-Soo";

let [user4, user5, user6] = str.split('-');

console.log(user4);
console.log(user5);
console.log(user6);



// 배열 구조 분해 : 기본값
// undefined를 방지하기 위해 기본값을 줌

// let [a, b, c] = [1, 2]; // 이렇게 하면 c가 undefined 가 나옴

let [a = 3, b = 4, c = 5] = [1, 2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 5



// 배열 구조 분해 : 일부 반환값 무시
let [user7, , user8] = ['Jisoo', 'Susie', 'Soo', 'Sue'];

console.log(user7); // 'Jisoo'
console.log(user8); // 'Soo'



// 배열 구조 분해 : 바꿔치기
// 구조 분해 할당이 아닌, a에 b값을 b에 a값을 넣고 싶은 경우
let a2 = 1;
let b2 = 2;

// a = b; // 기존의 a값이 없어져버림

let c2 = a2; // 임시로 c에 a값을 넣음
a2 = b2;
b2 = c2;

// 구조분해 할당으로, a에 b값을 b에 a값을 넣을 경우
[a2, b2] = [b2, a2];





// 객체 구조 분해
let user9 = { name: 'Jisoo', age: 29 };

let { name, age}  = user9;
// let name = user9.name; // 이 코드와 같음
// let age = user9.age;   // 배열과 다른 점은 순서도 상관 없음

console.log(name);
console.log(age);



// 객체 구조 분해 : 새로운 변수 이름으로 할당
let user10 = { name: 'Jisoo', age: 29 };

let {name: userName, age: userAge} = user10;

console.log(userName);
console.log(userAge);



// 객체 구조 분해 : 기본값
let user11 = { name: 'Jisoo', age: 29 };

// let { name2, age2, gender2 } = user11; // gender가 undefined가 됨

let { name2, age2, gender2 = 'female' } = user11