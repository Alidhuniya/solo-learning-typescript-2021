// OOP in typescript

// class Greeter {
//     greeting: string;
  
//     constructor(message: string) {
//       this.greeting = message;
//     }
  
//     greet() {
//       return "Hello, " + this.greeting;
//     }
//   }
  
//   let greeter = new Greeter("World");
//   console.log(greeter);
//   console.log(greeter.greet());


// inheritance

// class Animal {
//     move(distanceInMeters: number = 0) {
//       console.log(`Animal moved ${distanceInMeters}m.`);
//     }
//   }
  
//   class Dog extends Animal {
//     bark() {
//       console.log("Woof! Woof!");
//     }
//   }
  
//   const dog = new Dog();
//   dog.bark();
//   dog.move(10);
//   dog.bark();

/*
class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  
  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }
  
  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");
  
  sam.move();
  tom.move(34);*/


//   class Animal {
//     private name: string;
  
//     constructor(theName: string) {
//       this.name = theName;
//     }
//   }
  
//  let dfo = new Animal("doggy");
//  console.log(dfo.name)
//   Property 'name' is private and only accessible within class 'Animal'.


// readonly modifier
/* 
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
  
    constructor(theName: string) {
      this.name = theName;
    }
  }
  
  let dad = new Octopus("Man with the 8 strong legs");
  dad.name = "Man with the 3-piece suit";
  Cannot assign to 'name' because it is a read-only property.
  */

//  Up to this point, we’ve only talked about the instance members of the class, those that show up on the object when it’s instantiated. We can also create static members of a class, those that are visible on the class itself rather than on the instances. In this example, we use static on the origin, as it’s a general value for all grids. Each instance accesses this value through prepending the name of the class. Similarly to prepending this. in front of instance accesses, here we prepend Grid. in front of static accesses.

 class Grid {
   static origin = { x: 0, y: 0 };
 
   calculateDistanceFromOrigin(point: { x: number; y: number }) {
     let xDist = point.x - Grid.origin.x;
     let yDist = point.y - Grid.origin.y;
     return Math.sqrt(xDist * xDist + yDist * yDist);
   }
 
//    constructor(public scale: number) {}
 }
 
 let grid1 = new Grid(); // 1x scale
 let grid2 = new Grid(); // 5x scale
 
 console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
 console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

 console.log(grid1.calculateDistanceFromOrigin({ x: 11, y: 10 }));
 console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 17 }));