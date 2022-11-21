// assign
const sports = {
  event: "축구",
  player: 11
};
let dup = {};

Object.assign(dup, sports);
console.log(dup);




// 첫 번째 파라미터는 필수
try {
  const obj = Object.assign(null, {});
} catch (e) {
  console.log("null 작성 불가");
};


// Number 값 작성
const obj = Object.assign(100);
console.log(obj.valueOf());




// 두 번째 파라미터 작성
// 열거 가능 오브젝트 작성
let obj2 = {};
Object.assign(obj2, {ten: 10});
console.log(obj2);

const one = Object.create({}, {
  book: {value: 100, enumerable: false},
  sports: {value: 200, enumerable: true}
});
Object.assign(obj2, one); // enumerable true만 복사됨
console.log(obj2);


// 오브젝트 다수 작성
const book3 = {title: "책"};
const sports3= {item: "축구"};
const obj3 = Object.assign({}, book3, sports3);
console.log(obj3);


// 값을 작성
let obj4 = {ten: 10};
Object.assign(obj4, undefined, null, 200); // 값으로 작성한 undefined, null, 200은 복사되지 않음.
console.log(obj4);                         // 열거 가능한 오브젝트가 아니기 때문

const one4 = {un: undefined, nu: null}; // undefined와 null을 프로퍼티 값으로 작성하면 복사됨.
Object.assign(obj4, one4);
console.log(obj4)


// 값과 오브젝트 형태
const obj5 = Object.assign(100, {book5: 200}); // Number 인스턴스에 Object를 복사하는 것은 데이터 타입에 맞지 않음.
console.log(obj5.valueOf());
console.log(obj5.book5);