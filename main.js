// timer function
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료


//timer
const timer = setTimeout(() => {
  console.log("Heropy")
}, 3000) // unit: ms

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

// Interval
const timer2 = setInterval(() => {
  console.log("Heropy")
}, 3000) // unit: ms

const h1El2 = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})

