// Number 함수

/* isNaN()
Number가 아닌지 확인하는게 아니라
NaN 값인지 확인하는 것
*/
console.log(Number.isNaN("ABC"), isNaN("DEF"));
console.log(Number.isNaN(NaN), isNaN(NaN));
console.log(Number.isNaN(0 / 0), isNaN(0 / 0));
console.log(Number.isNaN("100"), isNaN("200"));

/*
실행 결과
false true
true true
true true
false false

글로벌 오브젝트의 isNaN는 값 타입이 Number가 아닌 것을 체크함.
글로벌 오브젝트의 isNaN(”200”)은 값을 숫자로 변환하고 그 결과로 비교함.
*/




// isInteger()
console.log(Number.isInteger(0));
console.log(Number.isInteger(1.0));
console.log(Number.isInteger(1.01));

/*
실행 결과
true
true
false
*/

console.log(Number.isInteger("12"));
console.log(Number.isInteger(true));
/*
실행 결과
false
false

true를 숫자로 변환하면 1이지만 Number.isInteger는 현재 상태로 체크하는 거라 false
*/