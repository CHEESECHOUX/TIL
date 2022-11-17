// Array 분할 할당
// 배열의 엘리먼트를 분할하여 할당

// 배열 차원에 맞추어 분할 할당
let one, two, three, four;
[one, two, [three, four]]
  = [1, 2, [3, 4]];
console.log([one, two, three, four]);

// 매치되는 인덱스에 변수가 없으면 값을 할당하지 않음
let five, six, seven, eight;
[five, , , eight] = [5, 6, 7, 8];
console.log([five, six, seven, eight]);


// spread 와 같이 사용
// 나머지를 전부 할당
let nine, rest;
[nine, ...rest] = [9, 10 ,11 ,12];
console.log(nine);
console.log(rest);
/*
nine에 9를 할당
나머지 10, 11, 12를 rest에 할당
*/

// 인덱스를 반영한 나머지 할당
let ten, twelve, rest2;
[ten, , twelve, ...rest2]
  = [10, 11, 12, 13, 14];
console.log(twelve);
console.log(rest2);