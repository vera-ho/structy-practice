// Time complexity: O(n)
// Space complexity: O(n)

const pairSum = (numbers, targetSum) => {
    const values = {};
  
    for(let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      let diff = targetSum - num;
      
      if(diff in values) return [values[diff], i];
      if(!values[num]) values[num] = i;
    }
};
  
console.log(pairSum([3, 2, 5, 4, 1], 8))