// 생성자 함수
function User(name, age){
  this.name = name;
  this.age = age;
  this.sayName = function(){
    console.log(this.name); // this는 user5
  }
}
let user5 = new User('Jisoo', 29);
user5.sayName();


//
function Item(title, price){
  this.title = title;
  this.price = price;
  this.showPrice = function(){
    console.log(`가격은 ${price}원 입니다.`);
  }
}

const item1 = new Item('맥북', 3000);
const item2 = new Item('키보드', 4000);
const item3 = new Item('마우스', 5000);

console.log(item1, item2, item3)