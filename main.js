// Callback
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

let timeout = (cb) => {
  setTimeout(() => {
    console.log('woohyeon')
    cb()
  }, 3000)
}

timeout(() => {
  console.log('Done!')
})
// console.log('Done')
