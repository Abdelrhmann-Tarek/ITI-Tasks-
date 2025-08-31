var userInput = prompt("Enter Sentense...");
var userLetter = prompt("Enter Letter...");

var indexes = [];
for(var i  =0;i<userInput.length;i++){

    if(userInput[i]==userLetter) {
        
        indexes.push(i);
    }
    
}
// return indexes;
console.log(indexes);