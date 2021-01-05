//typescript for js

// ts by inference
let helloWorld = "Hello World"; 

// defining types
//   interface User {
//       name: string;
//       id: number;
//   }

//   const user: User = {
//     name: "Hayes",
//     id: 0,
//   };
//   console.log(user.name);

  interface User {
    name: string;
    id: number;
  }

  interface User1 {
      name1: number;
  }
  
  class UserAccount {
    name: string;
    id: number;
    name1: number;
  
    constructor(name: string, id: number, name1: number) {
      this.name = name;
      this.id = id;
      this.name1 = name1;
    }
  }
  
  const user: User = new UserAccount("Murphy", 1, 3);
  const user1: User1 = new UserAccount("ali", 1, 5);
  console.log(user.name);
  console.log(user1.name1);
  console.log(user.id);
  console.log(user1.name1);

  //composing types
  
  //unions
  // generics
  // structural type system