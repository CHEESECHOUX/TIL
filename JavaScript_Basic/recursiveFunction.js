// 한 배열의 총합을 구하는 함수
let numbers = [3, 1, 4, 1, 5, 9];

function recursive(acc, array) {
  if (array.length === 0) {
    console.log(`총합은 ${acc}`)
    return acc;
  } else {
    try {
      console.log(`recursive(${acc} [${array}])가 "`);
      return recursive(acc + array[0], array.slice(1));
    } catch (e) {} finally {
      console.log(' "이라고 말했어요.')
    }
  }
}
recursive(0, numbers)

// for문으로 똑같이 작성
function for_loop (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
for_loop(numbers)




// for문이 아닌 재귀함수를 사용하는 이유
// 배열 속의 배열
let numAndAry = [3, 1, 4, [8, 1, 5], 5, 9];

function for_loop_deeper (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') { // 인자가 숫자라면
      sum += array[i];
    } else { // 인자가 또 다른 배열이라면
      for (let j = 0; j < array[i].length; j++) {
        sum += array[i][j];
      }
    }
  }
  return sum;
}


//
function recursive_deep (acc, array) {
  if (array.length === 0) {
    return acc;
  } else {
    if (typeof array[0] === 'number') {
      console.log(`call (${acc} [${array}])`)
    }
    return recursive_deep (acc +
      (typeof array[0] === 'number' ?
        array[0] :
        recursive_deep(0, array[0])),
      array.slice(1));
  }
}
console.log(`총합: ${
  recursive_deep(0, numAndAry)
}`)




// 하노이의 탑
// 원반 개수, 출발 기둥번호, 목적 기둥번호, 나머지 기둥번호
function hanoi(num, from, to, other) {
  if (num === 0) return;
  hanoi (num - 1, from, other, to); // 1 첫번째 호출
  console.log(`${from}번에서 ${to}로 옮긴다.`); // 2 원반을 어디서 어디로 옮길지 출력
  hanoi (num - 1, other, to, from); // 스스로를 호출
}
hanoi(4, 0, 1, 2);

/*
1.받아온 원반 개수보다 하나 적은 원반들을 목적지가 아닌 곳으로 옮김
2.맨 아리 원반을 목적지로 이동
3.다른 곳으로 옮겼던 원반들을 그 위에 얹음
*/