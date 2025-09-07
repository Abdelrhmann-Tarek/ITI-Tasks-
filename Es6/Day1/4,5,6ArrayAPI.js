//4
let numsArrF = (...nums)=>{
    return nums.filter(e=>e>0);
}

// console.log(numsArrF(1,5,9,-5,-9,-1,55,-44,85,-999,66,62))

//5

let numsArrR = (...nums)=>{
    return nums.reduce((total,e) => total+e);
}

// console.log(numsArrR(1,2,3,5,5,88,55));

//6 

let namesArr = (...names)=>{
    return names.map(e=>e.charAt(0).toUpperCase()+e.slice(1))
}

// console.log(namesArr("ahmed","mona","alaa","mark"));