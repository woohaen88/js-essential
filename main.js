// Type conversion

const { findLastKey } = require("lodash")

const a = 1
const b = '1'

console.log(a === b)

console.log("a == b: ", a == b)

// Truthy(참 같은 값)
// true, {}, [], 1, 2 'false', -12, '3.14'

// Falsy(거짓같은값)
// false, '', null, undefined, 0, -0, NaN

if (1) {
  console.log(123)
}

if (undefined) {
  console.log(234)
}