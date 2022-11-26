// 콜백 함수 삭제, 지우기


// forEach()
// Map 인스턴스를 반복하면서 callback 함수 호출

// callback 함수에 넘겨주는 파라미터
// (value, key, Map 인스턴스 순서)
const obj = new Map([
  ["one", 100],
  ["two", 200]
]);
const callback = (value, key, map) => {
  console.log(`${key}, ${value}`);
};
obj.forEach(callback);

// callback 함수에서 this 사용
const obj2 = new Map([
  ["one", 100],
  ["two", 200]
]);
function callback2(value, key, map){ // 일반 함수로 작성
  console.log(`${key}, ${value}, ${this.check}`);
};
obj2.forEach(callback2, {check: 50}); // 두 번째 파라미터가 callback 함수가 this로 참조할 오브젝트

// 콜백 함수를 화살표 함수로 작성하면 this가 window 오브젝트를 참조함(두 번째 파라미터 참조 못함)




// delete()
// Map 인스턴스에서 파라미터 값과 같은 entry 삭제
const obj3 = new Map([
  ["one", 100],
  [{},"오브젝트"]
]);
console.log(obj3.delete("one"));
console.log(obj3.delete({})); // 참조하는 메모리 주소가 달라 false

const sports = {};
obj3.set(sports, "스포츠");
console.log(obj3.delete(sports));




// clear()
/*
Map 인스턴스의 모든 entry를 지움
Map 인스턴스 자체를 삭제하는 것은 아니라 key, value를 추가할 수 있음.

size 프로퍼티는 Map 인스턴스의 entry 수를 반환.
array 의 length와 비슷하다고 생각하면 되는데, size는 개발자가 코드로 수정 불가.
*/
const obj4 = new Map([
  ["one", 100],
  ["two", 200]
]);
console.log(obj4.size);

obj4.clear();
console.log(obj4.size); // 다 지웠으니까 0 출력
obj4.set("add", "추가");
console.log(obj4.size); // 추가해서 1 출력