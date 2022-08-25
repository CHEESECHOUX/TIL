console.log(a)
if (true) {
  var a = 10
  if (true) {
    var a = 20
    console.log(a)
  }
  console.log(a)
}
console.log(a)


console.log(a)
if (true) {
  let a = 10
  if (true) {
    const a = 20
    console.log(a)
  }
  console.log(a)
}
console.log(a)


// TDZ: Temporal Dead Zone
if (true) {
  let a = 10
  if (true) {
    console.log(a) // reference Error
    const a = 20
    console.log(a) // 20
  }
  console.log(a)
}
console.log(a)
