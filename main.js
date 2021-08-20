function sum(x, y) {
  return x+y
}

sum(1, 3) // parameter
sum(4, 12)

const a = sum(1, 3)
const b = sum(2, 4)

console.log(a)
console.log(b)
console.log(a+b)

sum(1, 3)

const sum2 = function(x ,y) {
  return x + y
}

function sum3() {
  console.log(arguments)
  return
}