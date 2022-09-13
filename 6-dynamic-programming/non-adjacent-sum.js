// Will time out on large arrays
// Slicing in inefficient
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