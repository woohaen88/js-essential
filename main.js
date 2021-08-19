// 반복문 (for statement)
// for (시작조건; 종료조건; 변화조건) {}

for (let i = 0; i < 3; i += 1){
  console.log(i)
}
console.log(ulEl)

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1){
  const li = document.createElement('li')
  li.textContent = `list-${i+1}`
  if ((i+1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}
