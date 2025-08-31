var userString = [];
var userChar = "";
var count=0 ;
userString= prompt("Enter String..");
userChar = prompt("Enter a Char...");
for(i=0;i<userString.length;i++){

    if (userString[i]==userChar)count++;

}
console.log(count);