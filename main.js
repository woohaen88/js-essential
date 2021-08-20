// 즉시 실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7
function double() {
  console.log(a * 2)
}

double();

// 한번 실행하고 말 함수
(function () {
  console.log(a*2)
})();

// 즉시 실행함수와 double함수의 구분이 명확하지 않아서 생긴 error

//recommend
(function () {
  console.log(a*2)
}())
