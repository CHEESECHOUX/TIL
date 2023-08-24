// 3개 이상 중복요소가 있을 경우 에러가 발생함
let removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] && nums[i + 1] == nums[i + 2]) {
      nums.splice(i, 1);
    }
  }
  const k = nums.length;

  return k;
};

// 다시 풀기
let removeDuplicates2 = function (nums) {
  let i = 0;

  while (i < nums.length - 2) {
    // i + 2가 배열의 범위를 벗어나지 않도록
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      nums.splice(i + 2, 1);
    } else {
      i++;
    }
  }
};
