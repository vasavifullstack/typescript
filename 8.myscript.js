//class can implements with 2 interfaces
class CompanyEmployee {
    constructor(id, name, age, department, salary, city, state) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
        this.city = city;
        this.state = state;
    }
    displayDetails() {
        console.log(`${this.id}`);
        console.log(`${this.name}`);
        console.log(`${this.age}`);
        console.log(`${this.department}`);
        console.log(`${this.salary}`);
        console.log(`${this.city}`);
        console.log(`${this.state}`);
    }
}
var emp1 = new CompanyEmployee(1001, "vasavi reddy", 23, "IT", 100000, "hyderabad", "Telangana");
emp1.displayDetails();
