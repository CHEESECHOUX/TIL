// 함수
function sayHello(name){
  console.log(`Hello, ${name}`);
}

sayHello('Jisoo')

//
function showError(){
  console.log('에러가 발생했습니다. 다시 시도해주세요');
}

showError()



// 매개 변수가 있는 함수
function sayHello(name){
  let msg = 'Hello';
  if(name){
    msg += ', ' + name;
  }
  console.log(msg);
}

sayHello('Jisoo')



// 전역 변수와 지역 변수
let msg = "welcome"; // 전역 변수
console.log(msg)

function sayHello(name){
  let msg = "Hello"  // 지역 변수
  console.log(msg + ' ' + name);
}

sayHello('Jisoo')
console.log(msg)

//
function sayHello(name){
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`
  console.log(msg)
}

sayHello();
sayHello('Jisoo');

// 디폴트값 정해주기
function sayHello(name = 'friend'){
  let msg = `Hello, ${name}`
  console.log(msg)
}

sayHello();
sayHello('Jisoo');

// return 으로 값 반환
function add(num1, num2){
  return num1 + num2;
}

const result = add(2,3);
console.log(result)



// 함수 선언문
sayHello();

function sayHello(){
  console.log('Hello');
}

// 함수 표현식
let sayHello = function(){
  console.log('Hello');
}

sayHello();



// 화살표 함수로 변경
let add = function(num1, num2){
  return num1 + num2;
}

let add = (num1, num2) => {
  return num1 + num2;
}

// return문이 한 줄이면 괄호 생략 가능
let add = (num1, num2) => num1 + num2;

// 인수가 하나면 괄호 생략 가능
let sayHello = name => `Hello, ${name}`;

// 인수가 두 개, return문
const add = function (num1, num2) {
  const result = num1 + num2;
  return result;
}

const add = (num1, num2) => {
  return num1 +num2;
}

const add = (num1, num2) => num1 + num2;