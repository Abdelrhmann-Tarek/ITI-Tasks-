var factNum = (function(n) {
    var lastNum = 0;
    var lastResult = 1;

     
        if (n > lastNum) {
             
            for (var i = lastNum + 1; i <= n; i++) {
                lastResult *= i;
            }
            lastNum = n;
        return lastResult;

        } else if (n < lastNum) {
           
            lastResult = 1;
            for (var i = 1; i <= n; i++) {
                lastResult *= i;
            }
            lastNum = n;
        return lastResult;

        }
        
    
});


// console.log(factNum(4)); 
// console.log(factNum(5)); 
// console.log(factNum(6)); 
// console.log(factNum(9)); 


