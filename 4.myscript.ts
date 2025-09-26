//Enum is special class it represents the group of constant values.
//by default enum start to initilize the variable with the 0 
//and then it increase the count.
enum employeesList{
    vasavi,
    madhavi,
    vasundhara,
    amar,
    rajitha,
}
console.log("vasavi ID:" + employeesList.vasavi);
console.log("madhavi ID:" + employeesList.madhavi);
console.log("vasundhara ID:" + employeesList.vasundhara);

enum employeesList1{
    vasavi =1001,
    madhavi =1002,
    vasundhara =1003,
    amar =1004,
    rajitha =1005,
}
console.log("vasavi ID:" + employeesList1.vasavi);
console.log("madhavi ID:" + employeesList1.madhavi);
console.log("vasundhara ID:" + employeesList1.vasundhara);
console.log("amar ID:" + employeesList1.amar);
console.log("rajitha ID:" + employeesList1.rajitha);

enum Hotel_orders{
    starters=1,
    maincourse=2,
    cooldrinks=3
}
//case1
var first_order=2;
if(first_order==1){
    console.log("my first order is starters");
}
else(first_order==2)
    console.log("my first order is maincourse");
//case2
if(first_order==Hotel_orders.starters){
    console.log("my first order is starters");
}
else(first_order==Hotel_orders.maincourse)
    console.log("maincourse");


enum test_Apply{
    register="register for test by enter with userid and password",
    login="login with userid and password",
    apply="apply for specific role",
    message="successfully applied"
}
var process="login with userid and password";
if(process==test_Apply.login){
    console.log("error")
}
else(process==test_Apply.message)
    console.log(process)