const woohyeon = {
  firstName: 'woohyeon', // property
  lastname: 'kim',
  getFullName: () => `${this.firstName} ${this.lastname}` // method, this -> woohyeon 함수
}
console.log(woohyeon)

const amy = {
  firstName: 'Amy', // property
  lastname: 'clarke',
  getFullName: () => `${this.firstName} ${this.lastname}` // method, this -> woohyeon 함수
}
console.log(amy)

const neo = {
  firstName: 'Neo', // property
  lastname: 'Smith',
  getFullName: () => `${this.firstName} ${this.lastname}` // method, this -> woohyeon 함수
}
console.log(neo)

