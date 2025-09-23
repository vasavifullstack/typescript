//type is keyword to create the custom name.it can used in any datatype
//primitive datatype like string,number,boolean,undefined,null,bigint,symbol.
//is a single value with no properties or methods.
//typeof null  //returns object.
//complex datatype stores multiple values and different data types together.

type HDFCName=string;
type SBIName=string;

var customer_Name:HDFCName="vasavi";
type name=string;
var customer_Name1:name="vasavi";
console.log(customer_Name1);

var vasaviAge:number=23;
type age=number;
var vasaviAge1:age=23;
console.log(vasaviAge1);

type customer_ID=number;
type Balance=number;
type status =boolean;
var customer_ID1:customer_ID="1001";
console.log(customer_ID1);

type Name1=string;
type Name2=string;
var employeeNames={Name1:"manvi",Name2:"sathvik"};
var{Name1,Name2} =employeeNames;
console.log(employeeNames.Name1);
console.log(employeeNames.Name2);
console.log(employeeNames);


var customer_list:{name1:string,age1:number,balance1:number}={
    name1:"arjun",
    age1:14,
    balance1:100000
}
console.log(customer_list.name1);
console.log(customer_list.age1);
console.log(customer_list.balance1);
console.log(customer_list);

type Account={ID:number,age:number};
var Account:{ID,age}={ID:501,age:20};
console.log(Account);

var Account1:{age:number,id:number,balance:number}={age:27,id:900,balance:100000};
console.log(Account1);



