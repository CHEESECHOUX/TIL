// Map과 이터레이터 오브젝트

/* entries()
Map 인스턴스로 이터레이터 오브젝트 생성, 반환
next() 메서드로 호출하면 [key, value] 반환
*/
const obj = new Map([
  ["one", 100],
  ["two", 200]
]);
const iter = obj.entries();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());




// keys()
// Map 인스턴스의 key로 이터레이터 오브젝트 생성, 반환
const obj2 = new Map([
  ["one", 100],
  ["two", 200]
]);
const iter2 = obj2.keys();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());




// values()
const obj3 = new Map([
  ["one", 100],
  ["two", 200]
]);
const iter3 = obj3.values();
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());




// Symbol.iterator()
// Map.prototype.entries() 와 같음
const obj4 = new Map([
  ["one", 100],
  ["two", 200]
]);
const iter4 = obj4[Symbol.iterator]();
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());