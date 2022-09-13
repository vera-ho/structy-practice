// Time complexity: O(n x sqrt(n))
// Space complexity: O(n) linear
const summingSquares = (n, sums = {}) => {
    if(n === 0) return 0;
    if(n in sums) return sums[n];
    
    let minSum = Infinity;
    let i = 1;
    while(i <= Math.sqrt(n)) {
        let square = Math.pow(i, 2);
        if(square > n) break;
        
        let sum = summingSquares(n - square, sums);
        if(sum < minSum) minSum = sum;
        i += 1;
    }
    
    sums[n] = minSum + 1;
    return sums[n];
};
  
  // Brute force without sums object would be TC: O(sqrt(n) ^ n); SC: O(n)
  //  - Branching factor based on the square root of n, is the base (here sqrt(n))
  //  - Raised to n because of the height of the tree