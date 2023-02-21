// 정렬
// 아.. 몰게따
// 한 자리 수면 10씩 곱해줘서 sort 해서 붙이려니까... 10 곱해져있쟈나..
function solution2(numbers) {
  let answer = '';
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 10) {
      let num = numbers[i] * 10
      console.log(num)
    }
  }
  let numSort = numbers.sort();

  return answer;
}
solution2([6,10,2])


// 정답
function solution(numbers) {
  let answer = numbers.map(num => num + ''). // 각 숫자들을 문자로 변환
                sort((a, b) => (b + a) - (a + b)).join(''); // 문자로 변환된 숫자를 연결해 비교정렬해 정렬이 완료되면 join으로 다 붙여서 문자열 만들어주기

  return answer[0] === '0' ? '0' : answer; // numbers 배열이 [0, 0, 0, 0]으로만 구성되어 있을 경우 '0'만 출력
}

solution([6, 10, 2]);