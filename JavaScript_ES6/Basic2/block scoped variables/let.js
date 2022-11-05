// let은 var와 똑같은 개념으로 보는데 block scope에 갇히고 TDZ가 있다.

let a = 1
function f () {
  console.log(a, b, c)  // b, c is not defined
    let b = 2
    console.log(a, b, c) // c is not definded
    if (true) {
      let c = 3
      console.log(a, b, c) // 1, 2, 3
    }
    console.log(a, b, c) // c is not definded
}
f()


// let 재할당 가능
let d = 1
d = 2
console.log(d)


// 반복문 내에서의 함수 실행시
var funcs = []
for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}
funcs.forEach(function (f) {
  f()
})

/* 정답
[
  function(){ console.log(i); }, // for문이 돌고 forEach 실행될 때
  function(){ console.log(i); },
  function(){ console.log(i); },
  function(){ console.log(i); },
  ...

]
*/