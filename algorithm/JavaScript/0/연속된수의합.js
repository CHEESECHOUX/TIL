// 홀수 짝수로 나눠서 가운데 값을 먼저 구하고
// 가운데 값 앞 뒤로 -1, +1 반복문으로 값을 넣어준다

function solution(num, total) {
  const mid = parseInt(total / num)
  let index, dis;
  let answer = new Array(num)

  if (num % 2 === 1) {
    index = parseInt(num / 2)
  } else {
    index = parseInt(num / 2) -1
  }
  answer[index] = mid;
  console.log(mid, index, answer)

  for (let i = 0; i < num; i++) {
      if (i > index) {
          dis = i - index
          answer[i] = mid + dis
      } else if ( i === index) {
          continue
      } else {
          dis = index - i
          answer[i] = mid - dis
          console.log(dis)
      }
  }
  return answer
}


//
// function solution(num, total) {
//   const min = Math.ceil(total / num - Math.floor(num / 2));
//   return Array.from({ length: num }, (_, i) => i + min);
// }

console.log(solution(3, 12)); // [3, 4, 5]
// console.log(solution(5, 15)); // [1, 2, 3, 4, 5]
// console.log(solution(4, 14)); // [2, 3, 4, 5]
// console.log(solution(5, 5)); // [-1, 0, 1, 2, 3]