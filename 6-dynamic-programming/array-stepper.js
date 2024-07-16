// Time complexity: O(n^2) polynomial/quadratic - If array and its values are always one step short, need to look through all positions
// Space complexity: O(n)
const arrayStepper = (nums, index = 0, steps = {}) => {
    if(index === nums.length - 1) return true;
    if(nums[0] === 0 || index >= nums.length) return false;
    if(index in steps) return steps[index];
    
    let num = nums[index];
    let possible = false;
    for(let i = 1; i <= num; i++) {
        possible = possible || arrayStepper(nums, index + i, steps);
        if(possible) break;
    }
    
    steps[index] = possible;
    return possible;
};

const arrayStepperBetter = (nums, index = 0, steps = {}) => {
    if(index >= nums.length - 1) return true;
    if(index in steps) return steps[index];
    
    let num = nums[index];
    let possible = false;
    for(let i = 1; i <= num; i++) {
      possible = possible || arrayStepper(nums, index + i, steps);
      if(possible) break;
    }
    
    steps[index] = possible;
    return possible;
  };

  /***************************************************************************/


// Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.
// For example, given:
//     idx =  0  1  2  3  4  5
// numbers = [2, 4, 2, 0, 0, 1]

// The answer is true.
// We start at idx 0, we could take 1 step or 2 steps forward.
// The correct choice is to take 1 step to idx 1.
// Then take 4 steps forward to the end at idx 5.

// Approach
// Recursively call array stepper starting at a new index up to the value at current index
// If index is equal to length of array - 1, then we have reached the end of the array

// tc: O(n^2) polynomial
// sc: O(n) linear
const arrayStepper2 = (nums, index = 0, memo = {}) => {
  if (index in memo) return memo[index];
  if (index === nums.length - 1) return true;
  if (nums[index] === 0) return false;
  if (index >= nums.length) return false;

  const maxSteps = nums[index];
  for (let i = 1; i <= maxSteps; i++) {
    const possibleEnd = arrayStepper(nums, index + i, memo);
    memo[index] = possibleEnd;
    
    if (possibleEnd) {
      return true;
    }
  }

  return false;
};

// arrayStepper([2, 4, 2, 0, 0, 1]); // -> true
// arrayStepper([2, 3, 2, 0, 0, 1]); // -> false
// arrayStepper([3, 1, 3, 1, 0, 1]); // -> true
// arrayStepper([4, 1, 5, 1, 1, 1, 0, 4]); // -> true
// arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]); // -> false
// arrayStepper([1, 1, 1, 1, 1, 0]); // -> true
// arrayStepper([1, 1, 1, 1, 0, 0]); // -> false
// arrayStepper([ 
//   31, 30, 29, 28, 27,
//   26, 25, 24, 23, 22,
//   21, 20, 19, 18, 17,
//   16, 15, 14, 13, 12,
//   11, 10, 9, 8, 7, 6,
//   5, 3, 2, 1, 0, 0, 0
// ]); // -> false