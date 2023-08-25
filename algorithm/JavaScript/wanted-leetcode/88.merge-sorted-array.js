/* 
// 첫 번째 구현 코드
1. slice 메서드로 배열을 자르고, concat으로 합친다
2. nums1 배열을 바꾸는 것이 목적이므로 for 반복문으로 answer의 요소를 하나씩 할당해준다
*/
let merge = function (nums1, m, nums2, n) {
  const answer = nums1
    .slice(0, m)
    .concat(nums2)
    .sort((a, b) => a - b); // O(n log n)

  for (let i = 0; i < m + n; i++) {
    // O(n)
    nums1[i] = answer[i];
  }

  return nums1;
};

// 두 번째 구현 코드 - splice 메서드를 활용
let merge2 = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);

  nums1.push(...nums2);

  nums1.sort((a, b) => a - b);

  return nums1;
};

// 다른 사람이 작성한 코드
let merge3 = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

/*
leetcode에서 최다 득표순으로 봤는데, i++ j++ 같이.. 사용하는 건 처음봤다.

첫 번째 반복에서 i = 3, j = 0 이므로 nums1[3]은 nums2[0] 2가 된다.
두 번째 반복에서 i = 4, j = 1 이므로 nums1[4]는 nums2[1] 5가 된다.
세 번째 반복에서 i = 5, j = 2 이므로 nums1[5]는 nums2[2] 6이 된다.

[1, 2, 3, 2, 5, 6] 배열을 마지막으로 sort 함수를 사용해 정렬해준다.

최종 값은 [1, 2, 2, 3, 5, 6]이 된다.
*/
