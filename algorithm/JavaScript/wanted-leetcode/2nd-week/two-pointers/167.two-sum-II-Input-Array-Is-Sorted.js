/*
// 문제 읽기
target 값이 나오는 인덱스를 찾기

// 접근방법
투포인터 방법으로 왼쪽 오른쪽에서 하나씩 더하고
더한 값이 target 보다 작으면 왼쪽 인덱스를 오른쪽으로 옮기고
더한 값이 target 보다 크면 오른쪽 인덱스를 왼쪽으로 옮긴다

- Runtime : 93ms
- 시간복잡도 : O(n) number요소 길이만큼
*/

let twoSum = function (numbers, target) {
  left = 0;
  right = numbers.length - 1;

  while (left < right) {
    let answer = numbers[left] + numbers[right];
    if (answer == target) {
      return [left + 1, right + 1];
    } else if (answer < target) {
      left++;
    } else {
      right--;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
