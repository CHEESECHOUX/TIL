// Number.EPSILON
// 아주 작은 값

// 1. 미세한 값 차이
const total = 0.1 + 0.2;
console.log(total);
console.log(total === 0.3);
/*
실행 결과
0.30000000000000004
false

자바스크립트가 부동 소수점 처리를 하기 때문 (IEEE 754를 준수)
*/


// 2. 미세한 값 차이를 같은 값으로 간주
const value = Math.abs(0.1 + 0.2 - 0.3);
console.log(value < Number.EPSILON);
/*
실행 결과
true

value 는 0.00000000000000004 가 될 것
*/

/*
EPSILON 보다 작으면 그 값을 무시함
1번 예제로 본다면 0.1 + 0.2를 0.3으로 간주함
*/


// 3. 0/0 으로 NaN가 되는 것을 방지
console.log(0 / 0);
const value3 = 0 / (0 + Number.EPSILON);
console.log(value3)
/*
실행 결과 
NaN
0

1.0 / 0 값에 EPSILON 값(아주 작은 값)을 더해 나누면 0이 됨
2.0으로 후속 처리를 할 수 있음
*/