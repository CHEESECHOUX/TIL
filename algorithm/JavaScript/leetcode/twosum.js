function towSum(nums, target) {
  let seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    } else {
      seen.set(nums[i], i);
    }
  }
  return false;
}

console.log(towSum([2, 7, 11, 15], 9));
