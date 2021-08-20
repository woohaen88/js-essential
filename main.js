// arrow function
// () => {} vs function () {}

const double = function (x) {
  return x*2
}
console.log('double: ', double(7))

const doubleArrow = (x) => {
  return x *2
}
console.log("doubleArrow,", doubleArrow(7))

const doubleArrow2 = (x) => x*2
console.log("doubleArrow2,", doubleArrow2(8))

const doubleArrow3 = x => x*2
console.log("doubleArrow3,", doubleArrow3(9))

const doubleArrow4 = x => ({name: 'woohyeon'})
console.log("doubleArrow4,", doubleArrow4(9))