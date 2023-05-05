let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"

let count = Number(input[0]);
let countGroup = 0;

for (let i = 1; i <= count; i++) {
  let word = input[i];
  // console.log(word);
  const searchAlpa = [];
  let isGroup = true;

  for (let j = 0; j < word.length; j++) {
    if (searchAlpa.indexOf(word[j]) === -1) {
      // j에 해당하는 알파벳이 처음으로 등장하는 인덱스를 찾고, 없으면 -1
      searchAlpa.push(word[j]); // 연속해서 중복되는 알파벳을 제외한 모든 알파벳 푸시
      // console.log(searchAlpa);
    } else {
      if (searchAlpa.indexOf(word[j]) !== searchAlpa.length - 1) {
        // searchAlpa 배열에서 word 배열의 j번째 문자가 마지막으로 등장하는 위치가 현재 위치가 아니라면, word 배열의 j번째 문자는 중복된 문자
        isGroup = false;
        break;
      }
    }
  }
  if (isGroup) {
    countGroup += 1;
  }
}
console.log(countGroup);
