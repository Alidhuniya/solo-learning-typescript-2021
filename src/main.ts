// "noEmitOnError": true, flag in tsconfig file

// I asked on stackoverflow : How to force TypeScript to not compile to JS when I have an error in ts code, with tsconfig file?

// here is link: https://stackoverflow.com/questions/65661405/how-to-force-typescript-to-not-compile-to-js-when-i-have-an-error-in-ts-code-wi/65661508#65661508


function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

// let result1 = buildName("Bob"); // works correctly now
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
// Expected 1-2 arguments, but got 3.
// let result3 = buildName("Bob", "Adams"); // ah, just right
console.log(result2);



