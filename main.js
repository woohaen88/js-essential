import random from './getRandom'

// 조건문 (if statement)

const a = random()


switch (a) {
  case 0:
    console.log('a is 0')
    break // 중요
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break  
  default:
    console.log('rest....')
}

// if (a === 0) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else if (a === 4) {
//   console.log('a is 4')
// } else {
//   console.log('rest....')
// }

