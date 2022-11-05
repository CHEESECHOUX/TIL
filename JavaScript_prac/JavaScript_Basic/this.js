// 화살표 함수 내부에서 this

let boy = {
  name: "Jisoo",
  sayHello: () => {
    console.log(this); // 전역 객체
  }
};

boy.sayHello();
// this != boy



// 
let girl = {
  name: "Jisoo",
  showName: function () {
    // console.log(girl.name)
    console.log(this.name)
  }
};

let woman = girl; // woman으로도 접근 가능
woman.name = "susie"
console.log(girl.name);
woman.showName();

girl = null;
woman.showName(); // 콘솔이 girl일 때는 name이 없다고 오류



//
let backend = {
  name: "Jisoo",
  sayThis: function() {
    console.log(this); // backend 객체를 가리킴
  }
};

backend.sayThis();

// 화살표 함수로 변경
let backendd = {
  name: "Jisoo",
  sayThis: () => {
    console.log(this); // 화살표 함수에서 this를 쓰면 전역 객체를 가리킴. 
  }
};

backendd.sayThis();