/*TypeScript: A Static Type Checker
We said earlier that some languages wouldn’t allow those buggy programs to run at all. Detecting errors in code without running it is referred to as static checking. Determining what’s an error and what’s not based on the kinds of values being operated on is known as static type checking.

TypeScript checks a program for errors before execution, and does so based on the kinds of values, it’s a static type checker. For example, the last example above has an error because of the type of obj. Here’s the error TypeScript found:
*/

const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth; // this will show you NaN in console but why Nan(not a number when spelling is incorrect) to correct write "height" and you'll get the expected result
console.log(area);
// Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?

//correct way of doing

const obj1 = { width: 10, height: 15 };
const area1 = obj1.width * obj1.height;
console.log(area1);