// add()

// 1. Set 인스턴스 끝에 value 추가
let obj = new Set();
obj.add("축구").add("농구");
obj.add("축구"); // 값이 같으므로 저장되지 않음
for (let value of obj) {
  console.log(value);
};


// 2. 함수를 생성해 value로 사용
let obj2 = new Set();
obj2.add(function sports() { return 100; }); // 여기서 Function 오브젝트를 생성해서 등록
obj2.add(function sports() { return 200; });
for (let value of obj2) {
  console.log(value());
};
// 이름이 똑같아도 Function 오브젝트 메모리 주소가 다르기 때문에 두 개가 설정됨.


// 3. value 에 생성한 함수 이름 작성
const sports = () => { return 100; }; // 화살표 함수로 Function 오브젝트를 만들어서 sports 변수에 할당
let obj3 = new Set();
obj3.add(sports);
obj3.add(sports);
for (let value of obj3) {
  console.log(value());
};
/*
Function 오브젝트 생성 후 함수 이름으로 등록하면 두 개가 아닌 하나만 설정됨.
함수 이름으로 참조하는 Fucntion 오브젝트의 메모리 주소가 같기 때문
*/


// 4. Object 를 value 로 사용
const sports4 = {
  "축구": 11, "야구": 9
};
let obj4 = new Set();
obj4.add(sports4);
for (let value of obj4) {
  console.log(value);
};
// { '축구': 11, '야구': 9 } 출력




// has()
/*
set 오브젝트는 get() 메서드가 없음
has() 로 값의 존재 여부를 체크함.
*/

// Set 인스턴스에서 값의 존재 여부를 반환
const sports1 = () => {};
const obj1 = new Set([
  sports1
]);
console.log(obj1.has(sports1));
console.log(obj1.has("book"));
/*
실행 결과
true
false
*/