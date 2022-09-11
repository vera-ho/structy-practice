// Time complexity: O(n) linear
// Space complexity: O(n) linear
const fib = (n, fibValues = {}) => {
    if(n === 0) {
        fibValues[n] = 0;
        return 0;
    }
    
    if(n === 1){
        fibValues[n] = 1;
        return 1;
    }
    
    let n1Fib = fibValues[n - 1] ? fibValues[n - 1] : fibValues[n - 1] = fib(n - 1, fibValues)
    let n2Fib = fibValues[n - 2] ? fibValues[n - 2] : fibValues[n - 2] = fib(n - 2, fibValues)
    
    fibValues[n] = n1Fib + n2Fib;
    return fibValues[n];  
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const fibBetter = (n, fibValues = {}) => {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n in fibValues) return fibValues[n];
    
    let n1Fib = fib(n - 1, fibValues);
    let n2Fib = fib(n - 2, fibValues);
    
    fibValues[n] = n1Fib + n2Fib;
    return fibValues[n];  
};