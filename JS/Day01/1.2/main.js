var userInput ; /// اسال البشمهندسه علي this variable decleration
var totalSum =0;
for(i=0;userInput!=0&&totalSum<=100;i++){

    userInput =prompt("Please Enter Number..");
    if(!isNaN( Number(userInput))) totalSum= totalSum+ Number(userInput);
    else  prompt("Please you must Enter Number..");

}
console.log(totalSum);

