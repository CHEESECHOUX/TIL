// Set 오브젝트
const obj = new Set([
  1, 2, "ABC"
]);
console.log(`size: ${obj.size}`);

for (let value of obj) {
  console.log(value);
};




// Set 인스턴스 생성
const obj2 = new Set([
  1, 2, 1, [], {}
]);
console.log(`size: ${obj2.size}`);
for (let value of obj2) {
  console.log(value);
};