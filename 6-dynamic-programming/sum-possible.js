// Time complexity: O(n x a) where n = length of numbers; a = amount
// Space complexity: O(a) linear
// Without memoization, time complexity would be O(n^a) exponential
const sumPossible = (amount, numbers, sums = {}) => {
    if(amount === 0) return true;
    if(amount < 0) return false;
    if(amount in sums) return sums[amount];
  
    for(let num of numbers) {
        if(sumPossible(amount - num, numbers, sums)) {
            sums[amount] = true;
            return sums[amount];
        }
    }
    
    sums[amount] = false;
    return false;
};