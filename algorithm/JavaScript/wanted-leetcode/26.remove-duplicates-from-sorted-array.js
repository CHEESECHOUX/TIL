let removeDuplicates = function (nums) {
  const numsSet = new Set(nums);

  nums.length = 0; // 배열 초기화

  for (let value of numsSet) {
    nums.push(value);
  }

  const k = nums.length;

  return k;
};

// 투 포인터 기법... 어렵다
let removeDuplicates2 = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }
  return ++i;
};

console.log(removeDuplicates2([1, 1, 2]));
