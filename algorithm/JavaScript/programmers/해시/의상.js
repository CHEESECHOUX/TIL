/*
각 종류별로 최대 1가지 의상만 착용 가능
하루에 최소 한 개의 의상은 입어야함

의상은 1개이상 30개 이하

// 수식이 있다고 함..
옷(2+1) * 머리(1+1) * 바지(5+1) - 1
value.length + 1
*/

function solution(clothes) {
  let answer = 1;
  const category = {};

  clothes.forEach((e) => {
    const name = e[1];
    console.log(e[1]);
    if (category[name] === undefined) {
      category[name] = [e[0]]; // 종류이름이 저장되어있으면 의상이름만 추가
    } else {
      category[name].push(e[0]); // 종류이름이 저장되어있지 않으면 종류이름 추가
    }
  });

  for (const [key, value] of Object.entries(category)) {
    answer *= value.length + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
