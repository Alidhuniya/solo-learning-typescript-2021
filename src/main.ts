// classes

// Employee class is bascially a blueprint of any employee object that can be instantiated with this piece of code.
class Employee {
  public employeeName: string; // A public variable of type STRING
  private salary: number; // A private variable of type NUMBER

  constructor(employeeName: string, salary: number) {
      this.employeeName = employeeName;
      this.salary = salary;
  } // A contructor to create an employee object with a predefined salary and name.

  public promotion(): void {
      this.salary += 1000;
  } // Adding 1000 to the emplyee's current salary.

  public promotionone():void {
    this.salary += 2000;
  }

  
  public printSalary():void {
      console.log(this.employeeName + '\'s salary is: ' +  this.salary);
  } // This method prints the employee name and his/her salary. 

  public printSalaryone():void {
    console.log(this.employeeName + '\'s salary is: ' +  this.salary);
}


}
// Instantiate (create) an object from a class
let employee = new Employee('Bob', 2000);
let employee1 = new Employee("ALi", 5000);


employee.printSalary(); // 2000
employee.promotion(); 
employee.printSalary(); //3000

employee1.printSalaryone(); //5000
employee1.promotionone();
employee1.printSalaryone(); //7000
employee1.promotionone();
employee1.printSalaryone(); // 9000

employee1.promotionone();
employee1.printSalaryone(); // 11000

// Generics are types which can hold/use several types

let employeeNamesArray: Array<string>; // This array will only accept strings

// employeeNamesArray = [123]; // => Error
employeeNamesArray = ['Bob', 'Sam'];

console.log(employeeNamesArray); // Result => [ 'Bob', 'Sam' ]
