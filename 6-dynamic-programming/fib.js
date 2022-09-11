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
    
    let n1Fib = fibValues[n - 1] ? fibValues[n - 1] : fib(n - 1, fibValues);
    let n2Fib = fibValues[n - 2] ? fibValues[n - 2] : fib(n - 2, fibValues);
    
    fibValues[n - 1] = n1Fib;
    fibValues[n - 2] = n2Fib;
    fibValues[n] = n1Fib + n2Fib;
    
    return fibValues[n];  
};