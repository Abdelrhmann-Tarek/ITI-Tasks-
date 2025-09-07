// var greet = function (success, error, flag) { return flag ? success (flag): error();

// };

// var result=greet (

// function (value) {

// return value ? "Success output" : ":)";
// },
// function (value) {
//     return "Welcome "+ value ;

// },
// false




// );


// console.log(result);
 
function second (){
    var message ; 
    console.log(message);
}
function first(){
    var message = "First";
    second();
    console.log(message);

}
var message = "Default"; 
first();
console.log(message);