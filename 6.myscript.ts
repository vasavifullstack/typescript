//contract for class to access all members should be use in that class.
interface car_purchase{
    Name1    : string
    carName  :string
    model    :string
    color    :string
    year     :number
    speed    :number
    age      :number
    salary   :number
}
var car_purchase={
    carName : "Benz",
    model   : "Mercedes",
    color   : "black",
    year    :  2025,
    speed   :  10

}

interface PersonDetails{
    Name1   : string
    age     : number
    salary  : number
}
var PersonDetails = {
    Name1   : "vasavireddy",
    age     : 23,
    salary  : 500000
}
var PersonDetails1:car_purchase={
    Name1   : "manvitha",
    age     : 19,
    salary  : 100000,
    carName :  "KIA",
    color   :  "white",
    speed   : 10,
    model   :"shelters",
    year     :2023


} 
console.log(PersonDetails1.Name1);
console.log(PersonDetails1.carName);
console.log(PersonDetails1.color);


