// 내가 작성한 코드 - 시간 초과
// 시간복잡도 : O(k * n)
let rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    // O(k)
    let num = nums.pop(); // O(1)
    nums.unshift(num); // O(n)
  }

  return nums;
};

// 두 번째 시도 - 왼쪽 오른쪽 나눠서 이어붙였다
let rotate2 = function (nums, k) {
  k = k % nums.length; // 중복 회전 피하기
  const rightNums = nums.slice(-k);
  const leftNums = nums.slice(0, nums.length - k);

  for (let i = 0; i < rightNums.length; i++) {
    nums[i] = rightNums[i];
  }

  for (let i = 0; i < leftNums.length; i++) {
    nums[i + k] = leftNums[i];
  }

  return nums;
};
