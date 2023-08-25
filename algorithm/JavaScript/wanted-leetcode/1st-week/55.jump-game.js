/*
반복문 돌리기

현재 인덱스에서 최대로 멀리 뛸 수 있는? 값 > nums.length 라면 true
현재 인덱스 + 인덱스의 값
*/

let canJump = function (nums) {
  let maxJump = 0;
  let target = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    if (i > maxJump) return false; // 현재 위치가 maxJump 보다 크면 도착할 수 없으니까

    maxJump = Math.max(maxJump, i + nums[i]); // maxJump와 i + nums[i] 중 더 큰 값을 maxJump에 저장
    if (maxJump >= target) return true;
  }

  return false;
};

/*
- Rumtime : 102ms
- 시간복잡도 : O(n)
*/
