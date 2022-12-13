// 
function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "Jisoo";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "female" });
    })
    .then((user) => {
      // 생략
    })
    .catch(err => {
      console.error(err);
    });
}


// 위의 코드 async, await 으로 변경
async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = "Jisoo";
    user = await user.save();
    user = await Users.findOne({ gender: "female" });
    // 생략
  } catch (error) {
    console.error(error);
  }
}




// for 문과 async, await
const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();




//
async function findAndSaveUser(Users) {
  // 생략
}
findAndSaveUser().then(() => { /*생략*/});
// 또는
async function other() {
  const result = await findAndSaveUser();
}