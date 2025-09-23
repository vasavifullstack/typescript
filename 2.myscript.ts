var employee_ID:number =6;
employee_ID=9;
var employeeName:string="vasavireddy";
console.log(employee_ID);

var company:string="tcs";
console.log("i am working in",company ,"as a experience");

var working:boolean =true;
console.log("i am working in",company ,"is", working);

var Salary:any="1,00,000";
var employeeDetails:string = Salary;//any type can be assigned to type of variable.
console.log(employeeDetails);

var Property:unknown=false;
var employeeDetails1:number=Property;//unknown type cannot be assigned to anytype like string,number.
console.log(employeeDetails1);
//array
var color:string[] =["pink","blue","black","white"];
console.log(color);
console.log(color.push("yellow"));

var tcsofficial :readonly string[] =["home","search","job","contact us"];
//tcsofficial.push("address");
console.log(tcsofficial);


