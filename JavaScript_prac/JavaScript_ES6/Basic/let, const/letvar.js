// let 변수와 var 변수의 차이

// var 변수
var node = document.querySelector(".sports");
for (var k = 0; k < node.children.length; k++) {
  node.children[k].onclick = function(event) {
    event.target.style.backgroundColor = "yellow";
    console.log(k);
  };
};

/*
// html 파일
<ul class=sports>
<li>축구</li>
<li>농구</li>
<li>야구</li>
</ul>

// 실행 결과
축구 클릭시(onclick 이벤트) 3 출력
농구 클릭시 3 출력
야구 클릭시 3 출력

var 변수는 전체를 스코프로 갖게됨
*/


// let 변수
var node = document.querySelector(".sports");
for (let k = 0; k < node.children.length; k++) {
  node.children[k].onclick = function(event) {
    event.target.style.backgroundColor = "yellow";
    console.log(k);
  };
};

/*
html 파일 동일함

// 실행 결과
축구 클릭시 0 출력
농구 클릭시 1 출력
야구 클릭시 2 출력

let 변수에서는 k 값이 유지됨
마지막 값만 구해야 된다면 var을 사용해도 무관함

블록 단위로 처리해야한다면 let 변수를 사용
*/