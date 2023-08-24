let removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--; // 제거 후에 다음으로 넘어가면 앞으로 당겨진 요소를 건너뛰게 되니까
    }
  }

  const k = nums.length;

  return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
