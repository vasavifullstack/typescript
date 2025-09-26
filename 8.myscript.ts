//basic interface
interface Person{
    id        : number;
    name      : string;
    age       : number;
}
//extend the interface(inherits from person)
interface Employee extends Person{
    department          : string;
    salary               : number;
    displayDetails()    :void;
}
//another interface
interface Address{
    city    : string;
    state   : string;
}
//class can implements with 2 interfaces
class CompanyEmployee implements Employee,Address
{
    id           : number;
    name         : string;
    age          : number;
    department   : string;
    salary       : number;
    city         : string;
    state        : string;
    

    constructor(
        id           : number,
    name         : string,
    age          : number,
    department   : string,
    salary       : number,
    city         : string,
    state        : string,
    ){
        this.id=id;
        this.name=name;
        this.age=age;
        this.department=department;
        this.salary=salary;
        this.city=city;
        this.state=state;
    }
displayDetails():void{
    console.log(`${this.id}`);
    console.log(`${this.name}`);
    console.log(`${this.age}`);
    console.log(`${this.department}`);
    console.log(`${this.salary}`);
    console.log(`${this.city}`);
    console.log(`${this.state}`);





    }
}
var emp1 =new CompanyEmployee(1001,"vasavi reddy",23,"IT",100000,"hyderabad",
    "Telangana"
);
emp1.displayDetails();