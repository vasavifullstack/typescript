//Enum is special class it represents the group of constant values.
//by default enum start to initilize the variable with the 0 
//and then it increase the count.
var employeesList;
(function (employeesList) {
    employeesList[employeesList["vasavi"] = 0] = "vasavi";
    employeesList[employeesList["madhavi"] = 1] = "madhavi";
    employeesList[employeesList["vasundhara"] = 2] = "vasundhara";
    employeesList[employeesList["amar"] = 3] = "amar";
    employeesList[employeesList["rajitha"] = 4] = "rajitha";
})(employeesList || (employeesList = {}));
console.log("vasavi ID:" + employeesList.vasavi);
console.log("madhavi ID:" + employeesList.madhavi);
console.log("vasundhara ID:" + employeesList.vasundhara);
var employeesList1;
(function (employeesList1) {
    employeesList1[employeesList1["vasavi"] = 1001] = "vasavi";
    employeesList1[employeesList1["madhavi"] = 1002] = "madhavi";
    employeesList1[employeesList1["vasundhara"] = 1003] = "vasundhara";
    employeesList1[employeesList1["amar"] = 1004] = "amar";
    employeesList1[employeesList1["rajitha"] = 1005] = "rajitha";
})(employeesList1 || (employeesList1 = {}));
console.log("vasavi ID:" + employeesList1.vasavi);
console.log("madhavi ID:" + employeesList1.madhavi);
console.log("vasundhara ID:" + employeesList1.vasundhara);
console.log("amar ID:" + employeesList1.amar);
console.log("rajitha ID:" + employeesList1.rajitha);
var Hotel_orders;
(function (Hotel_orders) {
    Hotel_orders[Hotel_orders["starters"] = 1] = "starters";
    Hotel_orders[Hotel_orders["maincourse"] = 2] = "maincourse";
    Hotel_orders[Hotel_orders["cooldrinks"] = 3] = "cooldrinks";
})(Hotel_orders || (Hotel_orders = {}));
//case1
var first_order = 2;
if (first_order == 1) {
    console.log("my first order is starters");
}
else
    (first_order == 2);
{
    console.log("my first order is maincourse");
}
//case2
if (first_order == Hotel_orders.starters) {
    console.log("my first order is starters");
}
else
    (first_order == Hotel_orders.maincourse);
{
    console.log("maincourse");
}
var test_Apply;
(function (test_Apply) {
    test_Apply["register"] = "register for test by enter with userid and password";
    test_Apply["login"] = "login with userid and password";
    test_Apply["apply"] = "apply for specific role";
    test_Apply["message"] = "successfully applied";
})(test_Apply || (test_Apply = {}));
var process = "successfully applied";
if (process == test_Apply.login) {
    console.log("error");
}
else
    (process == test_Apply.message);
{
    console.log(test_Apply.message);
}
