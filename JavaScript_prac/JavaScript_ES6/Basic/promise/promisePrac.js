const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});
// 다른 코드 작성 가능
promise
.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.error(error);
})
.finally(() => { // 성공 실패 여부 상관없이 실행
  console.log("끝나고 무조건 실행");
})



//
promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.error(error);
  });




// 세 번 중첩되어 있는 콜백
function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => { // 첫 번째 콜백
    if (err) {
      return console.error(err);
    }
    user.name = "Jisoo";
    user.save((err) => { // 두 번째 콜백
      if (err) {
        return console.error(err);
      }
      Users.findOne({ gender: "female" }, (err, user) => { // 세 번째 콜백
        // 생략
      });
    });
  });
}


// 메서드가 프로미스 방식을 지원할 경우 catch 한 번에 처리
function findAndSaveUser2(Users) {
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




// Promise.all
const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ["성공1", "성공2"];
  })
  .catch((error) => {
    console.error(error);
  });