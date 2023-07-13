/*
n 도감에 수록된 포켓몬 수
m 맞춰야하는 문제 개수

m개의 줄에 각각 문제에 대한 답 출력
숫자 -> 포켓몬 이름
포켓몬 이름 -> 해당하는 숫자
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 1. 메모리 초과
const [n, m] = input
  .shift()
  .split(" ")
  .map((el) => Number(el));

const pocketmon = new Map();
const test = new Map();

for (let i = 0; i < n; i++) {
  pocketmon.set(i + 1, input[i]); // set() 메서드로 키와 값을 매핑해 저장 (포켓몬 번호와 맞추기 위해 i + 1)
}

for (let i = n; i < n + m; i++) {
  test.set(i - n + 1, input[i]);
}

test.forEach((value, key) => {
  if (!isNaN(value)) {
    // 숫자인지 확인
    const index = Number(value); // 숫자로 변환해서 index 변수에 할당
    test.set(key, pocketmon.get(index)); // pocketmon 맵에서 index를 키로 사용해 해당 포켓몬의 값을 가져와 test맵의 해당 값을 포켓몬 이름으로 변경
  } else {
    const index = [...pocketmon.values()].indexOf(value); // 맵의 값을 배열로 변환해 indexOf() 함수를 사용해 value를 찾음 (해당 포켓몬의 인덱스를 index 변수에 할당)
    test.set(key, index + 1); // test 맵의 해당 키와 값을 수정해 index에 1을 더한 값을 설정 = test맵의 값을 포켓몬 인덱스로 변경
  }
});

test.forEach((value) => {
  console.log(value);
});

/*
// 2. Map 자료구조를 이용해서 문제 풀이를 해야한다..
그냥 배열에서 일일이 Array.indexOf 메서드를 사용하면 시간 초과 발생

첫 번째 코드에서는 pocketmon, test 각각 맵 사용
두 번째 코드에서는 pocketmons, questions 배열 사용

*/
const N = +input[0].split(" ")[0];
const pocketmons = input.slice(1, N + 1);
const questions = input.slice(N + 1);

function solution(pocketmon, questions) {
  const map = new Map(
    pocketmons.map((pocketmon, index) => [pocketmon, index + 1]) // 포켓몬 이름과 인덱스를 매핑해서 저장
  );
  questions.forEach((question) => {
    // question 배열을 순회하면서 각 질문에 대한 처리
    if (Number.isNaN(+question)) console.log(map.get(question));
    // question이 숫자가 아닌 경우, map에서 해당 포켓몬의 이름의 인덱스를 가져와 출력
    // map.get(question)은 map에서 주어진 키인 question에 해당하는 값을 반환함 => queston에 해당하는 포켓몬의 인덱스가 출력
    else console.log(pocketmons[+question - 1]);
    // question이 숫자인 경우, pocketmon 배열에서 해당 인덱스에 해당하는 포켓몬 이름을 가져와 출력
    // +question - 1은 question을 숫자로 변환하고 1을 뺀 값 => question에 해당하는 포켓몬의 이름이 출력됨
  });
}

solution(pocketmons, questions);
