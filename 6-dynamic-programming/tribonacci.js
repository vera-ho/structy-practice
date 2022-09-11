const tribonacci = (n, tribVals = {}) => {
    if(n === 0 || n === 1) return 0;
    if(n === 2) return 1;
    if(n in tribVals) return tribVals[n];
    
    tribVals[n] = tribonacci(n - 1, tribVals) + tribonacci(n - 2, tribVals) + tribonacci(n - 3, tribVals);
    return tribVals[n];
};