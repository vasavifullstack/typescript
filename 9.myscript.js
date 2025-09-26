function Bank() {
    console.log("bankDetails");
}
function BankName(IFCcode, pincode) {
    console.log("bankname with details");
    console.log(IFCcode);
    console.log(pincode);
}
Bank();
BankName("hdfc123", 13245);
function CustomerID() {
    console.log("1234");
}
CustomerID();
//convert one type to another type
var BankAddress = "kadapa";
let Address = BankAddress; //compiler undertand it is string
