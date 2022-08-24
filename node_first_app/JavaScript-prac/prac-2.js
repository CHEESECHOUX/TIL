const person = {
  name: 'Jisoo',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// const printName = (personData) => {
//   console.log(personData.name);
// }
const printName = ({ name }) => {
  console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name,)

//console.log(person);
//person.greet();

// const copiedPerson = {...person};
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

//for (let hobby of hobbies) {
//  console.log(hobby);
//}
//console.log(hobbies.map(hobby => {
//  return 'Hobby: ' + hobby;
//}));
//console.log(hobbies);

//hobbies.push('programming');
//console.log(hobbies);

//const copiedArray = hobbies.slice();
//console.log(copiedArray);
//const copiedArray = [...hobbies];
//console.log(hobbies);

//const toArray = (...args) => {
//  return args;
// };

// console.log(toArray(1, 2, 3, 4));