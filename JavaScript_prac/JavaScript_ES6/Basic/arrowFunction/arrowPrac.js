var relationship1 = {
  name: 'jisoo',
  friends:['susie', 'sooyeon', 'yenosoo'],
  logFriends: function() {
    var that = this; // relationship1을 가리키는 this를 that에 저장
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();
/*
forEach 문에서 함수 선언문 사용.
각자 다른 함수 스코프의 this를 가지니까 that 이라는 변수를 사용해 relationship 에 간접적으로 접근
*/


const relationship2 = {
  name: 'jisoo',
  friends: ['susie', 'sooyeon', 'yenosoo'],
  logFriends() {
    this.friends.forEach(friend => {
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();
/* 
화살표함수를 사용해 바깥 스코프인 logFriends() 의 this를 그대로 사용할 수 있음.
상위 스코프의 this를 그대로 물려받음
*/