// 나머지 매개변수 

// 인수 전달
function showName(name) {
  console.log(name);
}

showName('Jisoo');
showName('Jisoo', 'Soo');

showName();



// arguments
function showName2(name) {
  console.log(arguments.length); // 받은 인수 개수
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName2('Jisoo', 'Soo');




// 나머지 매개변수 사용을 권장
function showName3(...names) { // 배열 이름 지정
  console.log(names);
}

showName3(); // 인수들이 들어가게됨 // [] 아무것도 전달하지 않으면 빈배열
showName3('Jisoo'); // ['Jisoo']
showName3('Jisoo', 'Soo'); // ['Jisoo', 'Soo']

// 나머지 매개변수, 전달 받은 모든 수를 더해야함 // 배열 메서드 사용 가능
function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//
function add(...numbers2) {
  let result2 = numbers2.reduce((prev, cur) => prev + cur);
  console.log(result2)
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



// 나머지 매개변수, user 객체를 만들어 주는 생성자 함수를 만들기
function User(name, age, ...skills) { // 나머지 매개변수는 항상 맨 뒤에
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Jisoo', 29, 'html', 'css');
const user2 = new User('Soo', 20, 'JS', 'css');
const user3 = new User('Sue', 10, 'python', 'css');

console.log(user1);
console.log(user2);
console.log(user3);