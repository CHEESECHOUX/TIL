// 객체 리터럴 기능 추가
var sayNode = function() {
  console.log("Node");
};
var es = "ES";
var oldObject = {
  sayJS: function() {
    console.log("JS");
  },
  sayNode: sayNode,
};
oldObject[es + 6] = "Fantastic";
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic


const newObject = {
  sayJS() { // 콜론, function 안 붙여도 됨
    console.log("JS");
  },
  sayNode, // 속성명, 변수명이 동일하면 한 번만 작성
  [es + 6]: "Fantastic",
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);