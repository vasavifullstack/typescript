function Bank():void{
    console.log("bankDetails");
}
function BankName(IFCcode:any,pincode:number):void{
    console.log("bankname with details");
    console.log(IFCcode);
    console.log(pincode);
}
Bank();
BankName("hdfc123",13245);
function CustomerID():number{
    console.log("1234");

}
CustomerID();
//convert one type to another type
var BankAddress :unknown="kadapa";
let Address =BankAddress as string;//compiler undertand it is string