// Object 오퍼레이션

// 1. 같은 프로퍼티 이름 사용
const value = {book: 10, book: 20};
console.log(value);

// 2. Shorthand property names
const one = 10, two = 20;
const values = {one, two};
console.log(values);




// 프로퍼티 이름 조합

// 1. 문자열을 프로퍼티 이름으로 사용
const value2 = {
  ["one" + "two"]: 12
};
console.log(value2.onetwo);

// 2. 변수값을 프로퍼티 이름으로 사용
const item = "world";
const sports = {
  [item]: 100,
  [item + " Cup"]: "월드컵", // 변수이름에 문자열 연결 (공백도 가능)
  [item + "Sports"]: function(){
    return "스포츠";
  }
};
console.log(sports[item]);
console.log(sports[item + " Cup"]);
console.log(sports[item + "Sports"]());

// 3. 분할 할당을 조합한 형태
const item2 = "book";
const result2 = {[item2]: title}
                = {book: "책"};
console.log(result2);
/*
실행 결과
{book: 책}

변수값을 프로퍼티 이름으로 사용하고 분할 할당한 형태
{[item2]: title} 가 {book: title} 형태가 됨
{book: title} 에 "책"이 할당됨.
*/