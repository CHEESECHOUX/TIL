// for-of 문
const list = [1, 2, 3];
for (let k = 0; k < list.length; k++){
  console.log(list[k]);
};

for (let value of list){
  console.log(value);
};

// for-of 배열
for (let value of [1, 2, 3]){
  console.log(value);
};

// for-of String
for (let value of "ABC"){
  console.log(value);
};




// for-in 과 for-of 차이
const obj = {};
Object.defineProperties(obj, {
  sports: {
    enumerable: false, value: "스포츠"
  },
  book: {
    enumerable: true, value: "책"
  },
});
for (let item in obj){
  console.log(item + ": " + obj[item]);
};
/*
실행 결과
book: 책

for-in 은 열거 가능한 프로퍼티가 대상
(enumerable: true)
*/



// for-of, Object
const sports = {
  soccer: "축구",
  baseball: "야구"
};
const keyList = Obeject.keys(sports);

for (let key of keyList){
  console.log(key + ": " + sports[key]);
};
/*
Object는 이터러블 오브젝트가 아님. for-of 사용 불가.

Object를 for-of로 전개하기 위해선
1.Object.keys()로 프로퍼티 이름을 배열로 만들고
2.만든 배열을 for-of로 전개
*/