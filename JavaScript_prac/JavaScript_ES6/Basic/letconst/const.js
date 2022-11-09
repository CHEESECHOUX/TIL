const sports = "축구";
try {
  sports = "농구"; // 에러
} catch (e) {
  console.log("const 할당 불가");
};

/*
실행 결과
const 할당 불가

try 블록은 별도의 스코프
const, let을 작성하지 않았음
sports 변수에 값을 할당해야하는데 const로 선언해서 에러 발생
*/




// Object일 경우 property 값을 바꿀 수 있음
const book = { title: "책"};
try {
  book = { title: "음악 책"}; // 1
} catch (e) {
  console.log("const 전체 할당 불가");
};
book.title = "미술 책"; // 2
console.log(book.title);

/*
1.Object 전체를 할당하면 에러 발생
2.book.property로 property 값 변경은 가능함
*/




// 배열의 엘리먼트 값 변경
const music = ["음악"];
try {
  music = ["음악 음악"];
} catch (e) {
  console.log("const 전체 할당 불가");
};
music[0] = "바껴라";
console.log(music[0]);
/*
오브젝트와 같이, 배열 전체는 변경할 수 없음
엘리먼트 값은 변경 가능
*/