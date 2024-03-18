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

// approach
// iterate through the array and calculate the difference between the target and each array value
// use an object to store the value (key) and array index (value)
// continue to iterate and check if the difference is a key in the object
// time complexity: linear O(n)
// space complexity: linear O(n)
const pairSum2 = (numbers, targetSum) => {
  const diffs = {}
  
  for (let i = 0; i < numbers.length; i++){
    const diff = targetSum - numbers[i]
    
    if (diffs[diff] != undefined) {
      return [diffs[diff], i]
    } else {
      diffs[numbers[i]] = i
    }
  }
};