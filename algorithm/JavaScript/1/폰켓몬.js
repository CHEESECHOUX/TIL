// 시간초과
function solution2(nums) {
  let pocketmon = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; i++) {
      if (nums[i] === nums[j]) { 
        pocketmon.push(nums[i])
    } else {
      count += 1;
    }
  }
  return count;
  }
}

// 포켓몬이 총 몇 종류, 가져갈 수 있는 포켓몬 총 몇 마리
function solution(nums) {
  let max = (nums.length)/2;
  let filter = ([...new Set(nums)]).length;
  console.log(max);
  console.log(filter);
  if (max >= filter) {
    return filter
  } else {
    return max
  }
}


// 다른 사람 정답
function solution(nums) {
  let max = nums.length / 2;
  let filter = [...new Set(nums)];

  return filter.length > max ? max : arr.length;
}

// console.log(solution([3,1,2,3]));
// console.log(solution([3,3,3,2,2,4]));