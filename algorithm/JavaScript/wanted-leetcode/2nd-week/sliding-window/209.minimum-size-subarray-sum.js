/*
// 문제 읽기
nums : 정수 배열
연속되는 수가 합쳐서 target값이 되는 최소의 인덱스 a 길이를 구해라

// 접근 방법
Slide Window로 풀기 (Slide Window 예시 보고 적용해서 풀었음)

합계가 target 이상이면서 길이가 최소인 연속 배열 인덱스를 찾는 것

right 포인터를 계속 오른쪽으로 이동시키면서 현재 합계sum이 target값 이상이 되면,
left 포인터를 오른쪽으로 이동시켜 window의 크기를 줄임
*/

let minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Number.MAX_VALUE; // 초기값은 최대 정수 값

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // right 포인터를 배열 시작부터 끝까지 이동하면서 sum에 계속 더하기

    while (sum >= target) {
      // 현재 윈도우sum 값 >= target 값
      minLength = Math.min(minLength, right - left + 1);
      // 현재 윈도우sum 길이와 기존 최소 길이 비교 후 최소값 저장

      sum -= nums[left]; // 현재 합계 sum에서 left 인덱스 값을 뺌
      left++; // left 포인터 오른쪽 인덱스로 한 칸 이동
    }
  }

  return minLength == Number.MAX_VALUE ? 0 : minLength;
};

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(4, [1, 4, 4]));

/*
- Runtime : 60ms
- 시간복잡도 : O(n)
반복문이 중첩되어 있는 것 같지만, 
right, left 포인터 모두 배열을 한 번씩 통과하기 때문에 배열의 크기인 n에 비례함 
*/
