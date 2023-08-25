/*
1. nums sort 해서 정렬
2. nums 배열 length / 2 으로 중간 값 찾기

과반수 이상이면 정렬된 배열에서 중간 위치일 것
*/

let majorityElement = function (nums) {
  nums.sort();

  let half = nums.length / 2;
  let answer = nums[Math.floor(half)];

  return answer;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
