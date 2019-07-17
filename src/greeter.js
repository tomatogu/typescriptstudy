function greeter(person) {
    return 'Hello ' + person.firstname + ' ' + person.lastname;
}
var user = {
    firstname: 'Tomato',
    lastname: 'Gu'
};
console.log(greeter(user));
function User(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = firstname + ' ' + lastname;
}
var me = new User('gu', 'xiaoyao');
for (var i in me) {
    console.log(me[i]);
}
