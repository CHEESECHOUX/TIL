/*
// 접근 방법
1. 영문자가 아닌 문자를 모두 제거
2. 모두 소문자로 변환

3. 앞 뒤로 동일하게 읽히는 경우 true / 아니면 false
투포인터로 중간에서 만나면 true
*/

let isPalindrome = function (s) {
  s = s.toLowerCase(); // 대문자를 소문자로 먼저 변경해야함 // O(n)
  s = s.replace(/[^a-z0-9]/g, ""); // 소문자 외에는 모두 다 삭제시키니까 // O(n)

  left = 0;
  right = s.length - 1;

  while (left < right) {
    // O(n/2)
    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("race a car"));

/*
- Runtime : 57ms
- 시간복잡도 : O(n)

two-pointers 예제를 보고 풀었는데
확실히 속도가 빠르다... 이래서 사용하는 구나
*/
