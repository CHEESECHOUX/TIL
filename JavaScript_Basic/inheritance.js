// prototype chain
const beverage = {
  shot: 2,
  taste () {
    console.log('soooooo good!');
  },
};

const americano = {
  color: 'black',
};

const latte = {
  color: 'brown',
};

const cafeMocca = {
  color: 'choco',
};

const tiramisu = {
  ingredient: 'mascarpone'
}

americano.__proto__ = beverage;
latte.__proto__ = beverage;
cafeMocca.__proto__ = beverage;

tiramisu.__proto__ = americano;

console.log(americano.shot);
console.log(latte.taste);
console.log(cafeMocca);
console.log(tiramisu.color);
console.log(tiramisu.shot);



// for in
for(i in tiramisu) {
  console.log(i);
}

console.log(Object.keys(tiramisu)); // 상속된 건 안 나옴
console.log(Object.values(tiramisu));


for (i in tiramisu) {
  if (tiramisu.hasOwnProperty(i)) {
    console.log('o', i); // 객체가 직접 갖고 있는 것
  } else { 
    console.log('x', i);
  }
}



// 생성자 함수
// const confectionery = {
//   ingredient: 'butter',
//   taste () {
//     console.log('soooooo good!');
//   },
// };

const Cake = function (color) {
  this.color = color;
};

Cake.prototype.ingredient = 'butter'; // __proto__ 대신, 생성자 함수가 생성하는 객체에 __proto__를 설정하는 법
Cake.prototype.taste = function () {  // 중복되는 코드를 줄일 수 있음!
  console.log('soooooo good!');
};
Cake.prototype.price = function () {
  console.log('hehe');
};

const carrotCake = new Cake('carrot');
const redvelvetCake = new Cake('red');

// carrotCake.__proto__ = confectionery;
// redvelvetCake.__proto__ = confectionery;

console.log(carrotCake.ingredient);
console.log(carrotCake.price);
console.log(redvelvetCake.ingredient);
