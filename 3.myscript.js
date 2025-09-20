//tuple -is a named array.
var family = ["sivareddy", 53, true, "kadapa"];
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
//destructuring
//extract the value from array or object to the variable(s)
//array destructuring
var [customerID, customerName, age] = [666, "vasavireddy", 23];
console.log(customerID);
console.log(customerName);
console.log(age);
var places = { town: "proddatur", dist: "kadapa", city: "hyderabad" };
console.log(places.town);
console.log(places.dist);
console.log(places.city);
//OBJECT Destructuring
var family1 = { father: "sivareddy", mother: "vijaya", brother: "sreenureddy" };
var { father, mother, brother } = family1;
console.log(father);
console.log(mother);
console.log(brother);
var places;
console.log(places.town);
console.log(places.city);
console.log(places.dist);
var bank = {
    bankname: "hdfc",
    bankID: 8785,
    location: "proddatur"
};
console.log(bank);
var bank1 = {
    "bankname1": "SBI",
    "bankID1": 8789,
    "location1": "kadapa"
};
console.log(bank1);
var bank2 = {
    "bankname2": "ICIC",
    "bankID2": 3456,
    "location2": "Hyderabad"
};
console.log(bank2);
