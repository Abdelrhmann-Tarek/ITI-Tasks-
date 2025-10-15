
// Task1
function calculateArea(width:number ,height:number = 1 ){
    return width * height 
}
// task2
interface IPerson
{
 name: string

age: number

isStudent: boolean

}

class Person implements IPerson{
   constructor( public name :string ,public age :number ,public isStudent:boolean)
   {
        this.name =name
        this.age =age
        this.isStudent =isStudent
   }
    
}
function printPersonInfo(Person:Person){
    console.log(`${Person.name} is ${Person.age} years old and is a student:${Person.isStudent}`)
}
var Person1 = new Person("abdo",23,true)
printPersonInfo(Person1)

// Task3

class Car
{
    constructor(public brand: string,public model: string,public year: number)
    {
        this.brand=brand
        this.model =model
        this.year =year

    }

    getCarInfo():string{
        // Brand: Toyota, Model: Corolla, Year: 2020
        return `Brand : ${this.brand} , Model : ${this.model},Year : ${this.year}`
    }
    
}
var Car1 = new Car("Toyota","Corolla",2020)
console.log(Car1.getCarInfo())

// Task4

type numberOrString  = number | string 
function PrintId (id:numberOrString) : void {
    console.log(`Your ID is ${id}!@#`)
}
PrintId(1549)
PrintId("dnlihf")
