// 배열 등과 함께 사용
const 배열 = ['바나나', '사과', '귤']
for (const 요소 of 배열) {
  console.log(요소)
  // 바나나 사과 귤
}

for (const 인덱스 in 배열) {
  console.log(인덱스, 배열[인덱스])
  // 0 바나나 1 사과 2 귤
}


// 일반적으로 특정 횟수만큼 반복할 때 사용
// for (어디부터; 어디까지; 몇 씩 증가) let을 사용해야함
for (let i = 0; i < 5; i++) {
  console.log(`${i}번째 반복입니다`)
}

for (let i = 0; i < 10; i+=2) {
  console.log(`${i}번째 반복입니다`)
}


// 역 반복문
for (let i = 20; i >= 10; i--) {
  console.log(`${i}번째 반복입니다`)
}


// let과 const의 사용
for (let i = 0; i < 배열.length; i++) {
  const 인덱스 = i
  const 요소 = 배열[i]
}
// i는 선언 후 i를 활용해 값을 변경하면서 인덱스를 추적 때문에 let으로 선언
// 내부 요소들은 반복문 블럭이 끝나면 완전히 사라지고 새로 만들어지기때문에 const로 선언