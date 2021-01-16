// classes
// Employee class is bascially a blueprint of any employee object that can be instantiated with this piece of code.
var Employee = /** @class */ (function () {
    function Employee(employeeName, salary) {
        this.employeeName = employeeName;
        this.salary = salary;
    } // A contructor to create an employee object with a predefined salary and name.
    Employee.prototype.promotion = function () {
        this.salary += 1000;
    }; // Adding 1000 to the emplyee's current salary.
    Employee.prototype.promotionone = function () {
        this.salary += 2000;
    };
    Employee.prototype.printSalary = function () {
        console.log(this.employeeName + '\'s salary is: ' + this.salary);
    }; // This method prints the employee name and his/her salary. 
    Employee.prototype.printSalaryone = function () {
        console.log(this.employeeName + '\'s salary is: ' + this.salary);
    };
    return Employee;
}());
// Instantiate (create) an object from a class
var employee = new Employee('Bob', 2000);
var employee1 = new Employee("ALi", 5000);
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
var employeeNamesArray; // This array will only accept strings
// employeeNamesArray = [123]; // => Error
employeeNamesArray = ['Bob', 'Sam'];
console.log(employeeNamesArray); // Result => [ 'Bob', 'Sam' ]
//# sourceMappingURL=main.js.map