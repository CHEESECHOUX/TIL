const user = {
  name: 'Jisoo',
};

console.log(user.name);

console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('age'));


const user2 = {
  name: 'Jisoo',
  hasOwnProperty: function() {
    console.log('hehe')
  }
}

console.log(user2.hasOwnProperty());