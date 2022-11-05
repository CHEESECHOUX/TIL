const superman = {
  name: "Jisoo",
  age: 29,
  fly: function(){
    console.log('날아갑니다. 슈웅')
  }
}

superman.fly();



// function 키워드 생략 가능
const supermann = {
  name: "susie",
  age: 29,
  fly () {
    console.log('날아갑니다. 쇼옹')
  }
}

supermann.fly();