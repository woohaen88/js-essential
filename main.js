// ES6 class

const heropy = {
  name: 'heropy',
  normal () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

heropy.normal()
heropy.arrow()

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const woohyeon = new User('woohyeon', 'kim')

console.log(woohyeon)