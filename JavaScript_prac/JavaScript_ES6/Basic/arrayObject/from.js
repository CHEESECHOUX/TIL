// arguments 변환
function args(){
  return Array.from(arguments);
};
console.log(args(1, 2, 3));


// 콜백 함수 호출
const like = {0: "zero", 1: "one", length:2};
console.log(Array.from(like, value => {
  return value + "변경";
}));


// this로 오브젝트 참조
const like2 = {0: 10, 1: 20, length: 2};
console.log(Array.from(like2, function(value){
  return value + this.plus;
}, {plus: 70}));