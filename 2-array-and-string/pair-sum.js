// Time complexity: O(n^2)
// Space complexity: O(1)

const pairSum = (numbers, targetSum) => {
    const pairs = [];
    
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++ ) {
            if(numbers[i] + numbers[j] === targetSum) pairs.push(i, j)
        }
    }
    
    return pairs;
};
  
module.exports = {
    pairSum,
};
  