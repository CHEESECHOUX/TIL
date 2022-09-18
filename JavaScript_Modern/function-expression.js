// 함수 선언
function sayHi() {
	console.log( "Hello" );
}

// 함수 표현식
let sayHi2 = function () {
	console.log( "Hello" );
};



//  함수의 본질은 값
function sayHi() { // 함수 생성
	console.log( "Hello" );
};

let func = sayHi;  // 함수 복사
// let func = sayHi(); // 함수가 아닌 함수의 반환 값이 복사

func();
sayHi();

// 표현식으로 다시 작성
let sayHi = function() {
	console.log( "Hello" );
};



// 콜백 함수
function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

function showOk() {
	console.log( "동의하셨습니다." );
}

function showCancel() {
	console.log( "취소 버튼을 누르셨습니다." );
}

ask("동의하십니까", showOk, showCancel);

// 함수 표현식으로 다시 작성
function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no ();
}

ask (
	"동의하십니까?",
	function() { console.log( "동의하셨습니다." ); }, // 이름 없이 선언한 익명함수
	function() { console.log( "취소 버튼을 누르셨습니다." ); }
);



// 함수 표현식과 선언문의 문법 차이
// 함수 선언문
function sum(a, b) {
	return a + b;
}
// 함수 표현식
let sum = function(a, b) { 
	return a + b;
};