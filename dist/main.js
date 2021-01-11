// function
// let z = 100;
// function addToZ(x, y) {
//   return x + y + z;
// }
// console.log(addToZ(5,5));
// add types to simple function
var add = function (x, y, z) {
    return x + y + z;
};
console.log(add(2, 5, 2));
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(2, 5));
var myAdd1 = function (x, y
//return type
) {
    return x + y;
};
console.log(myAdd1(7, 3));
// As long as the parameter types line up, it’s considered a valid type for the function, regardless of the names you give the parameters in the function type.
// Of note, only the parameters and the return type make up the function type. Captured variables are not reflected in the type. In effect, captured variables are part of the “hidden state” of any function and do not make up its API.
// optional and default parameters
/*
// optional parameter
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildName("Bob"); // works correctly now
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
// Expected 1-2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right
console.log(result1,result2,result3);
*/
/*
// default parameter

function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected 1-2 arguments, but got 3.
let result4 = buildName("Bob", "Adams"); // ah, just right

*/
/*
Unlike plain optional parameters, default-initialized parameters don’t need to occur after required parameters. If a default-initialized parameter comes before a required parameter, users need to explicitly pass undefined to get the default initialized value. For example, we could write our last example with only a default initializer on firstName:

function buildName(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // error, too few parameters
Expected 2 arguments, but got 1.
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams"); // okay and returns "Will Adams"
*/
//  rest parameters
// function buildName(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }
// // employeeName will be "Joseph Samuel Lucas MacKinzie"
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName;
console.log(buildNameFun("ali", "karam", "arshad"));
// this keyword
//We can fix this by making sure the function is bound to the correct this before we return the function to be used later. This way, regardless of how it’s later used, it will still be able to see the original deck object. To do this, we change the function expression to use the ECMAScript 6 arrow syntax. Arrow functions capture the this where the function is created rather than where it is invoked:
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
//# sourceMappingURL=main.js.map