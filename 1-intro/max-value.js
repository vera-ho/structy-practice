// Time complexity: O(n) linear
// Space complexity: O(1) constant
const maxValue = (nums) => {
    let max = nums[0];
    nums.forEach( number => {
        if(number > max) {
            max = number;
        }
    })
    return max;
};

// Time complexity: O(n^2) due to slice
// Space complexity: O(n) because recursion (memory stack)
const maxValueRecursive = (nums) => {
    if(!nums) return -Infinity;
    if(nums.length === 1) return nums[0];
    
    let max = maxValue(nums.slice(1));
    if(nums[0] > max) max = nums[0]
    return max;
};
  
// Time complexity: O(n) linear
// Space complexity: O(1) constant
const maxValue2 = (nums) => {
  let max = -Infinity;
  for(let num of nums) {
    if(num > max) max = num;
  }
  return max;
};