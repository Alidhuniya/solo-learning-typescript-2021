// basic types

/*
Tuple
Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
*/

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
console.log(x[0]);
// Initialize it incorrectly
//x = [10, "hello"]; // Error

//enum
//unknown types
/*
Unknown
We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API. In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.
 */

 // any
 // void
 // undefined and null
 // never
 