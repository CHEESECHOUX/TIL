const superman = {
  name: "Jisoo",
  age: 29,
}

// 접근
superman.name
superman["age"]

// 추가
superman.gender = "female";
superman['hairColor'] = "black";

// 삭제
delete superman.gender;



// 단축 프로퍼티
const name = "jisoo";
const age = 29;

const superman = {
  name,
  age,
  gender: 'female',
}

// 프로퍼티 존재 여부 확인
"birthDay" in superman;
"age" in superman;


//
function makeObject(name, age) {
  return {
    name,
    age,
    hobby: "coding"
  };
}

const soo = makeObject("soo", 29);
console.log(soo)

console.log("age" in soo)
console.log("birthday" in soo)



// 나이 확인 후 성인인지 확인
function isAudult(user) {
  if (!('age' in user) || user.age < 20) {
    return false;
  }
  return true;
}

const Jisoo = {
  name: "Jisoo",
  age: 29,
};

const susie = {
  name: "susie"
};

console.log(isAudult(Jisoo))



// for .. in 반복문
const Choi = {
  name: "Choi",
  age: 29
}

for(x in Jisoo) {
  console.log(Jisoo[x])
}