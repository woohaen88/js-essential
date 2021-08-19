// 비교 연산자(arithemetic operator)

const a = 1
const b = 1

console.log(a === b) // 일치 

const c = 1
const d = 2

console.log(c === d) // 불일치 

function isEqual(x ,y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '1'))

const tmp1 = 1
const tmp2 = 3
const tmp3 = 1

console.log(tmp1 !== tmp2)
console.log(tmp1 !== tmp3)

console.log(tmp1 < tmp3)
console.log(tmp1 < tmp2)
console.log(tmp1 <= tmp2)

// 논리 연산자(logical operator)
const aa = 1 === 1 // true
const bb = 'AB' === 'AB' //true
const cc = false

console.log(aa)
console.log(bb)
console.log(cc)

console.log('&&: ', aa && bb && cc)
console.log('|| ', aa || bb || cc)
console.log('!aa: ', !aa)