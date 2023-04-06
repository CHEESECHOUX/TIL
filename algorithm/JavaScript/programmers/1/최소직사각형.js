//
function solution2(sizes) {
  // 일단 가로, 세로 최대값을 구해 곱한 값과 배열[0], [1]곱한 값을 비교하려고 했음
  let widthMax = Math.max(...sizes[0])
  let heightMax = Math.max(...sizes[1])
  let x = widthMax * heightMax

  for (let i = 0; i < sizes.length; i++) {
    let size = sizes[i][0] * sizes[i][1]
  }
}

// 다른 사람 풀이 1
function solution(sizes) {
  let w = sizes.map(el => el[0]);
  let h = sizes.map(el => el[1]);

  // w가 h보다 작으면 두 개를 바꿔서 w의 최대값을 구하고 h의 최대값을 구해 곱함
  for (let i = 0; i < sizes.length; i++) {
    if (w[i] < h[i]) {
      let tmp = w[i];
      w[i] = h[i];
      h[i] = tmp;
      // console.log(tmp) // 15, 8 출력됨
    }
  };
  const maxW = Math.max(...w);
  const maxH = Math.max(...h);
  
  const answer = maxW * maxH;
  return answer;
}

// 다른 사람 풀이 더 깔끔하게
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  })
  return maxSize[0] * maxSize[1];
}



// 다른 사람 풀이 2
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach(s => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}



// let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
console.log(solution(sizes));