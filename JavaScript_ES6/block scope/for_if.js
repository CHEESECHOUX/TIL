// if문. for문. while문. switch-case문. '문단'

var sum = 0
for (let i = 1 ; i <= 10 ; i++ { // i가 for문 안에서만 존재
  sum += i
})
console.log(sum)
console.log(i) // reference error


{
  let a = 2
  if (a > 1) {
    let b = a * 3
    console.log(b) // 6
  } else {
    let b = a / 3 // 실행 X
    console.log(b)
  }
  console.log(b) // reference error
}
console.log(a) // reference error


if (Math.random() < 0.5) {
  let j = 0
  console.log(j)
} else {
  let j = 1
  console.log(j)
}
console.log(j)


let a = Math.ceil(Math.random() * 3)
switch (a) {
  case 1: {
    let b = 10
    console.log(a + b)
    break
  }
  case 2: {
    let b = 20
    console.log(a + b)
    break
  }
  case 3: {
    let b = 30
    console.log(a + b)
    break
  }
}
console.log(a, b) // b는 reference error