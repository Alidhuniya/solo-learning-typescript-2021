//typescript for js
// ts by inference
var helloWorld = "Hello World";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, name1) {
        this.name = name;
        this.id = id;
        this.name1 = name1;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1, 3);
var user1 = new UserAccount("ali", 1, 5);
console.log(user.name);
console.log(user1.name1);
console.log(user.id);
console.log(user1.name1);
//composing types
//unions
// generics
// structural type system
