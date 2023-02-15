// 나의.. 궁리
function solution(array, commands) {
// 배열 하나로 합쳐서?
let command = commands.reduce(function(acc, cur){
  [...acc, ...cur];
})
// slice 해주는데...  어떻게 돌리지
array.slice((commands[0][0]-1, commands[0][1]))
}




// 정답 1
// for문 안에서 slice 해주면 됐음. 문제에 오름차순 정렬 있는 거 못 봄.
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let list = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => { return a-b });
    answer.push(list[commands[i][2]-1]);
  }
  return answer;
}


// 정답 2
function solution(array, commands) {
  return commands.map( v => {
    return array.slice(v[0]-1, v[1]).sort((a, b) => a-b).slice(v[2]-1, v[2])[0]
  });
}


console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));