// call
const jisoo = {
  name: 'Jisoo',
};

const soo = {
  name: 'Soo',
};

function showThisName() {
  console.log(this.name);
}

showThisName();
showThisName.call(jisoo); // this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메소드인 것처럼 사용 가능
                          // call의 첫 번째 매개변수는 this로 사용할 값
                          // 매개변수가 더 있으면 그 매개변수로 호출하는 함수로 전달됨

// 업데이트 함수
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
};

// update.call(jisoo, 1994, 'pororo');
// console.log(jisoo);

// update.call(soo, 2000, 'student');
// console.log(soo);



// apply
// call은 일반적인 함수와 마찬가지로 매개변수를 직접받지만, apply는 배열로 받음
// 두 번째 매개변수로 배열을 전달하면 그 요소를 차례대로 인수로 사용 
update.apply(jisoo, [1994, 'pororo']);
console.log(jisoo);

update.apply(soo, [2000, 'student']);
console.log(soo);



// call과 apply
// const minNum = Math.min([3, 10, 1, 6, 4]); // 콘솔 찍으면 NaN
const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums); // 스프레드 문법은 나머지 매개변수와 반대될 때 사용
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums); // null은 this로 사용될 값.
// = Math.min.apply(null, [3, 10, 1, 6, 4])
const maxNum = Math.max.call(null, ...nums); // call은 차례대로 매개변수가 들어가야 하니 스프레드 문법 사용
// = Math.max.apply(null, 3, 10 , 1, 6, 4)

console.log(minNum);
console.log(maxNum);



// bind
// update 함수를 이리저리 옮기면서 호출할 때 this 값을 고정하고 싶은 경우 사용
const suesoo = {
  name: 'Suesoo',
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
};

const updateSuesoo = update.bind(suesoo); //  이 함수는 항상 suesoo를 this로 받음

updateSuesoo(1980, 'police');
console.log(suesoo);

//
const user = {
  name: 'ChoiJisoo',
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName();

let fn = user.showName;

fn(); // 콘솔에 찍으면 아무것도 안 나옴. fn을 할당할 때 this를 잃어버린것

fn.call(user); // this로 사용할 user를 넣어주면됨
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();