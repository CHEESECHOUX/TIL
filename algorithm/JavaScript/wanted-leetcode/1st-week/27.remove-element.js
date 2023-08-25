/*
// 접근
1. nums 배열에서 특정 값 삭제
splice 활용해서 반복문으로 
if (val과 같은 요소일 경우) i번째 위치에서 1개 요소 제거

2. nums.length로 k값 반환
*/

// 내가 구현한 코드
let removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--; // 제거 후에 다음으로 넘어가면 앞으로 당겨진 요소를 건너뛰게 되니까
    }
  }

  const k = nums.length;

  return k;
};

/*
- Runtime : 79ms
- 시간복잡도 : O(n^2)

for 반복문에서 nums의 모든 요소를 반복하고, splice 메서드로 하나하나 다 검사하게 되니까

시간복잡도가 O(n) * O(n) = O(n^2) 된다.
더 간단하게 할 방법이 없을까...

반복문.. 한 번으로 끝낼 방법...
*/

// 다른 사람이 구현한 코드
let removeElement2 = function (nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  return count;
};
console.log(removeElement([3, 2, 2, 3], 3));

/*
- Runtime : 61ms
- 시간복잡도 : O(n)

k외에 다음 요소에 어떤 것들을 남겨두는지 중요하지 않다는 말이 핵심이었다...!

다른 경우의 요소를 nums 배열의 앞 요소에 할당하고, count만 추가하면 O(n)으로 풀 수 있는 문제였다.
주어진 조건에만 만족하면 된다는 사실을 잊지 말자.
*/
