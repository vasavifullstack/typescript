//interface-contract ,structure of an object and specify the properties 
//and methods that an object has or should have.
//class is used to "implement".
//type vs Interface: Key Differences
//Extending: Both can be extended, but interfaces support declaration merging.
//Unions/Intersections: Only type aliases support union and intersection types.
//Implements: Classes can implement either.
//Recommendation: Use interface for objects, type for everything else.
//union and interaction.
type Animal = { name: string };
type Bear = Animal & { honey: boolean };           //union
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";
console.log(response);
//Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
console.log(coloredRectangle.width);

//class is used "implements".
interface customer_orders{
    starter :string
    maincourse : string                         //filed member
    cooldrinks :string
    bill() : number 
    allorder() : string[]                           //method
}
class Customer1 implements customer_orders{
    starter :string= "veg rollers"
    maincourse : string="veg biryani"
    cooldrinks : string="fruit fusion"
    bill()    : any{
      return 2000;
    }
    allorder() : string[]{
        return ["veg rollers","veg biryani","fruit fusion"]
    }
}
var customer =new Customer1();
console.log(customer.allorder());
console.log(customer.starter);
