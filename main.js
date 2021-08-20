function User(first, last) { // 앞에가 대문자
  this.firstName = first
  this.lastName = last  
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const woohyeon = new User('woohyeon', 'park')
const amy = new User('amy', 'clarke')
const neo = new User('neo', 'smith')

console.log(woohyeon.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())

