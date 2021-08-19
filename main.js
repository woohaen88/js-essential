// 변수 유효범위(Variable Scope)
// var, let, const


// Error
// function scope() {
//   if (true){
//     const a = 123    
//   }
//   console.log(a)
// }

function scope() {
  if (true){
    const a = 123    
    console.log(a)
  }  
}
scope()


function scope() {
  if (true){
    var a = 123  // 함수레벨      
  } 
  console.log(a) 
}
scope()