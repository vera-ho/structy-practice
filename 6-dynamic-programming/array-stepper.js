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