function maxMinValue([...arr]){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max,min];
}
let testArray=[1,5,9,3,2,9,8,13,9,2,2,5,1];

 let [maxVal,minVal] = maxMinValue(testArray);
//  console.log (maxVal);
//  console.log (minVal);