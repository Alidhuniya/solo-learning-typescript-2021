//interface

interface LabeledValue {
  label: string;
  size: number;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label + " " + labeledObj.size);
  console.log(labeledObj.size);
}

let myObj = { size: 7, label: "Size 10 Object" };
printLabel(myObj);

/*
Readonly properties
Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property:

interface Point {
  readonly x: number;
  readonly y: number;
}Try
You can construct a Point by assigning an object literal. After the assignment, x and y can’t be changed.

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
Cannot assign to 'x' because it is a read-only property.
Try
TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

ro[0] = 12; // error!
Index signature in type 'readonly number[]' only permits reading.
ro.push(5); // error!
Property 'push' does not exist on type 'readonly number[]'.
ro.length = 100; // error!
Cannot assign to 'length' because it is a read-only property.
a = ro; // error!
The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
Try
On the last line of the snippet you can see that even assigning the entire ReadonlyArray back to a normal array is illegal. You can still override it with a type assertion, though:

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

a = ro as number[];Try
readonly vs const
The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. Variables use const whereas properties use readonly.
 */

 /*
 Interfaces Extending Classes
When an interface type extends a class type it inherits the members of the class but not their implementations. It is as if the interface had declared all of the members of the class without providing an implementation. Interfaces inherit even the private and protected members of a base class. This means that when you create an interface that extends a class with private or protected members, that interface type can only be implemented by that class or a subclass of it.

This is useful when you have a large inheritance hierarchy, but want to specify that your code works with only subclasses that have certain properties. The subclasses don’t have to be related besides inheriting from the base class. For example:

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

class ImageControl implements SelectableControl {
Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
  Types have separate declarations of a private property 'state'.
  private state: any;
  select() {}
}Try
In the above example, SelectableControl contains all of the members of Control, including the private state property. Since state is a private member it is only possible for descendants of Control to implement SelectableControl. This is because only descendants of Control will have a state private member that originates in the same declaration, which is a requirement for private members to be compatible.

Within the Control class it is possible to access the state private member through an instance of SelectableControl. Effectively, a SelectableControl acts like a Control that is known to have a select method. The Button and TextBox classes are subtypes of SelectableControl (because they both inherit from Control and have a select method). The ImageControl class has it’s own state private member rather than extending Control, so it cannot implement SelectableControl.
  */

  // Extending Interface
  interface Shape {
    color: string;
  }
  
  interface PenStroke {
    penWidth: number;
  }
  
  interface Square extends Shape, PenStroke {
    sideLength: number;
  }
  
  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;