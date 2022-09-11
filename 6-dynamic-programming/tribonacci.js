// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Without memoization, time complexity would be eponential O(3^n)
const tribonacci = (n, tribVals = {}) => {
    if(n === 0 || n === 1) return 0;
    if(n === 2) return 1;
    if(n in tribVals) return tribVals[n];
    
    tribVals[n] = tribonacci(n - 1, tribVals) + tribonacci(n - 2, tribVals) + tribonacci(n - 3, tribVals);
    return tribVals[n];
};