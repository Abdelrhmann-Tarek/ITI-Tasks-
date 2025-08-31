function userInput(){
    var numbers = [];
    var num = Number(prompt("Enter"));
    while(!isNaN(num) && num != 0){
        numbers.push(num);
        num = Number(prompt("Enter"));
    }
    return numbers;
}
function makeOperations(numbers){
    var sum = numbers[0];
    var multiply = numbers[0];
    var divison = numbers[0];
    for(var i = 1; i < numbers.length;i++){
        sum += numbers[i];
        multiply *= numbers[i];
        divison /= numbers[i];
    }
    console.log(sum);
    console.log(multiply);
    console.log(divison);

    // document.writeln(`sum of nums = ${sum}`);

  
    document.writeln(`Sum = ${sum}<br>`);
    document.writeln(`Multiply = ${multiply}<br>`);
    document.writeln(`Division =${divison}<br>`);
    
}
makeOperations(userInput());
