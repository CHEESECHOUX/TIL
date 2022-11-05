// 문자열 특정 위치 접근
let desc = '안녕하세요.';

desc[2]
desc[4] = '욧';
console.log(desc);



//
let descc = "Hi guys. I'm Jisoo";

// 대, 소문자
console.log(descc.toUpperCase());
console.log(descc.toLowerCase());

// indexOf 문자를 인수로 받아 몇 번째 위치하는지 알려줌
console.log(descc.indexOf('Jisoo'));
console.log(descc.indexOf('susie')); // 찾는 문자가 없을 경우 -1 반환 

if(descc.indexOf('Hi')){ // 0이므로 false 콘솔이 찍히지 않음
  console.log('Hi가 포함된 문장입니다.');
}

if(descc.indexOf('Hi') > -1){
  console.log('Hi가 포함된 문장입니다.');
}



//
let desccc = "abcdefg";

console.log(desccc.slice(2));
console.log(desccc.slice(0, 5));
console.log(desccc.slice(2, -2));

console.log(desccc.substring(2, 5));
console.log(desccc.substring(5, 2));

console.log(desccc.substr(2, 4));
console.log(desccc.substr(-4, 2));



//
let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

let newList = [];

for(let i=0; i<list.length; i++){
  newList.push(
    list[i].slice(4)
    );
}

console.log(newList);



// 금칙어 indexOf
function hasCola(str){
  if(str.indexOf('콜라')){
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과')
  }
}

hasCola('스프라이트 주세요'); // if -1은 true
hasCola('저는 제로 콜라요');
hasCola('콜라'); // if 0은 false라서 else로 넘어가버림

// 다시
function hasCola2(str){
  if(str.indexOf('콜라') > -1){
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과')
  }
}

hasCola2('스프라이트 주세요');
hasCola2('저는 제로 콜라요');
hasCola2('콜라');



// 금칙어 includes
function hasCola3(str) {
  if (str.includes("콜라")) {
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과")
  }
}

hasCola3('아아 주세요');
hasCola3('저는 쿨라임피지오요');
hasCola3('콜라 주세요');