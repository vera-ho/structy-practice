// Will time out on large arrays because a copy keeps getting made for poor space complexity
// Slicing is inefficient
const nonAdjacentSum_BAD = (nums, tracker = {}) => {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums in tracker) return tracker[nums];  // JavaScript converts to string automatically
    
    const include = nums[0] + nonAdjacentSum(nums.slice(2), tracker);
    const exclude = nonAdjacentSum(nums.slice(1), tracker);
    tracker[nums] = Math.max(include, exclude);
    return tracker[nums];  
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear 
// Removes slicing, tracks index instead
const nonAdjacentSum = (nums, numIdx = 0, tracker = {}) => {
    if(nums.length <= numIdx) return 0;
    if(numIdx in tracker) return tracker[numIdx];  
    
    const include = nums[numIdx] + nonAdjacentSum(nums, numIdx + 2, tracker);
    const exclude = nonAdjacentSum(nums, numIdx + 1, tracker);
    
    tracker[numIdx] = Math.max(include, exclude);
    return tracker[numIdx];  
};


// Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.
// For example, given:
// [2, 4, 5, 12, 7]
// The maximum non-adjacent sum is 16, because 4 + 12. 
// 4 and 12 are not adjacent in the array.

// Approach:
// Base case is when index is past the array size
// Memo saves index of position in array
// Truncate array by taking 'first' element or no elements
// If including first element, recurse with new index skipping the item next to it

// Tc: linear O(n)
// Sc: linear O(n)
const nonAdjacentSum2 = (nums, index = 0, memo = {}) => {
  if (index in memo) return memo[index];
  if (index >= nums.length) return 0;

  const included = nums[index] + nonAdjacentSum(nums, index + 2, memo);
  const excluded = nonAdjacentSum(nums, index + 1, memo);
  memo[index] = included >= excluded ? included : excluded;
  return memo[index];
};