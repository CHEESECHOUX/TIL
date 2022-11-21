// fromCodePoint()

// 파라미터에 다수의 코드 포인트 작성 가능
const point = String.fromCodePoint;
console.log(point(49, 50, 51)); // 코드 포인트를 10진수로 작성
console.log(point(44032, 44033));

console.log(point(0x31, 0x32, 0x33)); // 코드 포인트를 16진수로 작성
console.log(point(0x1F418));




// fromCharCode() 사용
console.log(String.fromCharCode(0x1f418));
console.log(String.fromCharCode(0xD83D, 0xDC18));




// padStart()
console.log("ABC".padStart(10, "123"));
console.log("ABC".padStart(6, "123456"));
console.log("ABC".padStart(3, "123"));
console.log("ABC".padStart(6).length);




// trimStart() 문자열 앞의 공백 삭제
const value = "  123";
console.log(value.length);
console.log(value.trimStart().length);

const split = "a, b, c".split(",");
for (let value of split){
  console.log(`${value}, ${value.length}`);
  console.log(value.trimStart().length);
};