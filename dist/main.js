// ts tooling
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleName + " " + person.lastName;
}
var user = { firstName: "Jane", middleName: " Mishra", lastName: "User" };
document.body.textContent = greeter(user);
