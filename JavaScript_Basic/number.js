let num = 10;

console.log(num.toString());
console.log(num.toString(2));



//
let num1 = 5.1;
let num2 = 5.7;

// 올림
console.log(Math.ceil(num1));
console.log(Math.ceil(num2));

// 내림
console.log(Math.floor(num1));
console.log(Math.floor(num2));

// 반올림
console.log(Math.round(num1));
console.log(Math.round(num2));

// 소수점 둘째자리까지 표현
let userRate = 30.1234;

console.log(Math.round(userRate * 100)/100);

console.log(userRate.toFixed(2)); // 문자열 반환
console.log(userRate.toFixed(6));

console.log(Number(userRate.toFixed(2)));
console.log(Number(userRate.toFixed(6)));



// isNaN()
let x = Number('x'); // NaN

console.log(isNaN(x));



// parselnt()
// 문자와 숫자가 혼용되어 있어도 읽을 수 있는 곳까지 숫자로 반환
let margin = '10px';

console.log(parseInt(margin));
console.log(Number(margin));

let redColor = 'f3';
console.log(parseInt(redColor));

console.log(parseInt(redColor, 16)); // 16진수로 변환
console.log(parseInt(11, 2));


// parseFloat() 부동소수점까지
let padding = '18.5%';

console.log(parseInt(padding)); 
console.log(parseFloat(padding));



// 1부터 100 사이 임의의 숫자
console.log(Math.floor(Math.random()*100)+1);



// 절대값
console.log(Math.abs());

// 제곱
console.log(Math.pow(2, 10)); // 2의 10승

// 제곱근
console.log(Math.sqrt(16));