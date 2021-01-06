// generics
function identity<T>(arg: T): T {
    return arg;
  }

  let output = identity<string>("myString");
  console.log(output);
  //or
  console.log(identity(444)); /* or */ console.log(identity<number>(555));