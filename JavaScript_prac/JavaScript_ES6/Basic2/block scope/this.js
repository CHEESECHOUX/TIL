var value = 0;
var obj = {
  value: 1,
  setValue: function () {
    this.value = 2; // this: obj 메소드 -> obj.value = 2; 
    (function () {
      this.value = 3; // this: window 함수 -> window.value = 3;
                      // 전역 value = 3
    })();
  }
}
obj.setValue();
console.log(value); // 3
console.log(obj.value); // 2