    function Person(name, age,ssn) {
	this.name = name;
	this.age = age;
    var ssn  = 0 ; 

	
    this.getSSN = function () {
        return ssn;
	};
	this.setSSN = function (value) {
        ssn = value;
	};
    
    
    
}

Person.prototype.greet = function(){
    console.log("this is the parent func :(");
}



Person.compareAge=function(person1,person2){
    if (person1.age>person2.age){
        return `${person1.name} is older than${person2.age}`;
    }
    else if (person1.age<person2.age){
        return `${person2.name} is older than${person1.age}`;
    }

}





function Student(name,age,school){
    Person.call(this,name,age);
    this.school = school ;
    Student.prototype.greet = function(){
        console.log("this is the student func :)");
    }
} 

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor = Student;


var student1 = new Student("abdo","23","eelu");
// console.log(student.__proto__.greet());
var student2 =new Student("salma","18","idgl");
var person = new Person();
// console.log(Person.compareAge(student1,student2));
// console.log(person.compareAge(student1,student2));//error static method 


person.adko = 3 ;
console.log(person.ssn); // 3  undefined :) 
person.setSSN(5);
console.log(person.getSSN())
