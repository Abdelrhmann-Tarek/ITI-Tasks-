var fruits = ["apple", "strawberry", "banana", "orange", 
"mango"];
//a is a string 

// console.log (fruits.every(e=>typeof e == "string"));

//b start with 

// console.log (fruits.some(e=>e.startsWith("a")));

//c filter 

// console.log(fruits.filter(e=>e.startsWith("b")||e.startsWith("s")));

// d & e  mappping  ... for each 
var newFruits = fruits.map(e=>`this is ${e}`);

// newFruits.forEach(e=>console.log(e));






