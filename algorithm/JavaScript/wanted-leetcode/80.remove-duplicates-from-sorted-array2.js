/*
// 문제 읽기
nums : 비내림차순으로 정렬된 정수 배열
각 요소는 최대 두 번 나타날 수 있다.
순서는 동일하게 유지되어야 함

k = 최대 두 번 중복된 nums의 요소 개수

// 접근 방법
같은 값이.. 최대 두 번

반복문으로 만약 현재 인덱스 값과 + 1 인덱스 값이 같고 && + 1인덱스 값과 +2 인덱스 값이 같으면?
splice로 같은 요소 한 개 삭제

k는 length로
*/

// 1. 테스트 2를 통과 못한 코드 - 3개 이상 중복요소가 있을 경우 에러가 발생함
let removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] && nums[i + 1] == nums[i + 2]) {
      nums.splice(i, 1);
    }
  }
  const k = nums.length;

  return k;
};

/*
// 2. 다시 풀기 - 통과
- Runtime : 73ms
- 시간복잡도 : O(n)
*/

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
