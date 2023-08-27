/*
// 문제 읽기
반복되는 문자열이 없는 가장 긴 문자열의 길이 찾기

// 접근 방법
right은 오른쪽부터 시작해서 right 배열 안에 반복되는 문자열이 없으면 계속 추가되고
left는 왼쪽부터 시작해서 left 배열 안에 반복되는 문자열이 없으면 계속 추가
*/

// 첫 번째 시도 - 이건 슬라이딩 윈도우 방식이 아닌 것 같다..
let lengthOfLongestSubstring = function (s) {
  let left = [];
  let right = [];
  let minLength = Number.MAX_VALUE;

  for (let i = 0; i < s.length; i++) {
    if (!left.includes(s[i])) {
      left += s[i];
    }

    if (!right.includes(s[i])) {
      right += s[i];
    }
  }

  if (left.length > right.length) {
    return left.length;
  } else return right.length;
};

// "pwwkew"를 넣었을 때 "wke"가 아니라 pwke"가 나옴

// 모르겠어서 슬라이딩 윈도우 방식으로 푼 정답 봄
let lengthOfLongestSubstring2 = function (s) {
  let set = new Set(); // 중복된 문자 확인하기 위함
  let left = 0;
  let maxSize = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      // set에 right포인터가 가리키는 문자가 있으면? = 중복이면?
      set.delete(s[left]); // 중복 제거를 위해 left포인터가 가리키는 문자를 set에서 제거
      left++; // 포인터 오른쪽으로 한 칸 이동
    }
    set.add(s[right]);
    maxSize = Math.max(maxSize, right - left + 1); // 이전 result 길이와 현재 윈도우 길이 비교
  }
  return maxSize;
};

/*
// 슬라이딩 윈도우 기법으로 푸는 이유
right 포인터는 문자열의 끝까지 한 번만 이동
left 포인터도 문자열의 끝까지 최대 한 번만 이동

- 시간 복잡도 : O(n)을 갖게됨
- Runtime : 87ms
*/

console.log(lengthOfLongestSubstring2("abcabcbb"));
console.log(lengthOfLongestSubstring2("bbbbbb"));
console.log(lengthOfLongestSubstring2("pwwkew"));
