interface Person {
  firstname: string
  lastname: string
}

function greeter (person: Person) {
  return 'Hello ' + person.firstname + ' ' + person.lastname
}

let user = {
  firstname: 'Tomato',
  lastname: 'Gu'
}

console.log(greeter(user))

function User (firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
  this.fullname = firstname + ' ' + lastname
}

const me = new User ('gu', 'xiaoyao')

for (let i in me) {
  console.log(me[i])
}