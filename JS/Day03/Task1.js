function twoRandom(arr){
    var firstIndex=Math.floor(Math.random()*arr.length);
    
    var secondIndex;
    do {
        secondIndex=   Math.floor(Math.random()*arr.length);
         
    }while(firstIndex===secondIndex)

        return  [arr[firstIndex],arr[secondIndex]]
}

var names =["ahmed","islam","fatma","ali","sandra"];
console.log(twoRandom(names));