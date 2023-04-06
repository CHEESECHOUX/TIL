// 동명이인이 있을 경우를 생각 못하고 차집합으로 함
function solution2(participant, completion) {
  let notFinish = (participant.filter( x => !completion.includes(x)));
  let answer = notFinish.join('')
  return answer
}


// 다시 시도
function solution2(participant, completion) {
  let answer = [];
  let arr1 = participant.sort();
  let arr2 = completion.sort();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) delete arr2[j] // 왜 중복값 삭제 안 되지..
    }
  }
  return answer
}




// 정답
function solution1(participant, completion) {
  let answer = '';

  completion[completion.length] = ''; // 한 명만 완주하지 못했다고 문제에 명시되어 있어서 괜츈

  let arr1 = participant.sort();
  let arr2 = completion.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) answer = arr1[i];
  }
  return answer;
}


// 깔끔한 정답
function solution(participant, completion) {
  let map = new Map();
  console.log(map)

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    map.set(a, (map.get(a) || 0) + 1); // map.get(a)가 false면 0이 출력값이 되고, key는 a value에 1 저장됨
    map.set(b, (map.get(b) || 0) - 1); // 완주자라면 1에서 -1이 되니까 value 값 0
  }
  console.log(map) // Map(4) { 'mislav' => 1, 'stanko' => 0, 'ana' => 0, undefined => -1 }

  for(let [k, v] of map) {
    if(v > 0) return k; // 1이상은 미완주자 or 동명이인
  }
  return 'nothing';
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));