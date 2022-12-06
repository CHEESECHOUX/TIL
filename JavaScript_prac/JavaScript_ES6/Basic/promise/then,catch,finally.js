// then()
const obj =
new Promise((resolve, reject) => {
  resolve(1, 2, 3);
});
obj.then((value) => { console.log(value) },
        (reason) => { console.log(reason) });



// then()의 return
const obj2 =
new Promise((resolve, reject) => {
  resolve(100);
});
obj2.then((value) => {
  return value + 50;
}).then((param) => {
  console.log(param);
});




// catch()
const check = false;
const obj3 =
new Promise((resolve, reject) => {
  check ? resolve(check) : reject(1, 2, 3);
});
obj3.then((value) => { console.log(value) })
    .catch((value) => { console.log(value) });




// finally
const obj4 = new Promise((resolve, reject) => {
  resolve(100);
});
obj4.then((value) => { console.log(value); return 200;
}).catch((reason) => { console.log(reason);
}).finally((param) => { console.log("finally:" + param);
});