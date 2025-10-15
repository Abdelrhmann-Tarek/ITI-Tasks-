// Task1
function calculateArea(width, height) {
    if (height === void 0) { height = 1; }
    return width * height;
}
var Person = /** @class */ (function () {
    function Person(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    return Person;
}());
function printPersonInfo(Person) {
    console.log("".concat(Person.name, " is ").concat(Person.age, " years old and is a student:").concat(Person.isStudent));
}
var Person1 = new Person("abdo", 23, true);
printPersonInfo(Person1);
// Task3
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        // Brand: Toyota, Model: Corolla, Year: 2020
        return "Brand : ".concat(this.brand, " , Model : ").concat(this.model, ",Year : ").concat(this.year);
    };
    return Car;
}());
var Car1 = new Car("Toyota", "Corolla", 2020);
console.log(Car1.getCarInfo());
function PrintId(id) {
    console.log("Your ID is ".concat(id, "!@#"));
}
PrintId(1549);
PrintId("dnlihf");
