const bear = { name: "Winnie", honey: true };
let response = "success";
console.log(response);
const coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle.width);
class Customer1 {
    constructor() {
        this.starter = "veg rollers";
        this.maincourse = "veg biryani";
        this.cooldrinks = "fruit fusion";
    }
    allorder() {
        return ["veg rollers", "veg biryani", "fruit fusion"];
    }
}
var customer = new Customer1();
console.log(customer.allorder());
console.log(customer.starter);
