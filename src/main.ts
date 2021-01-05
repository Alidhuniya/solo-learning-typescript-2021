// ts tooling


// classes
// class Student {
//     fullName: string;
//     constructor(
//       public firstName: string,
//       public middleInitial: string,
//       public lastName: string
//     ) {
//       this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
//   }
  
//   interface Person {
//     firstName: string;
//     lastName: string;
//     middleInitial: string;
//   }
  
//   function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
//     // return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
//   }
  
//   let user = new Student("Jane", "M.", "User");
  
//   document.body.textContent = greeter(user);



// interfaces
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
  }
  
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.middleName + " "  + person.lastName;
  }
  
  let user = { firstName: "Jane", middleName: " Mishra", lastName: "User" };
  
  document.body.textContent = greeter(user);