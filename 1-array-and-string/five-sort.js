// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.
// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

// Approach
// Use two pointers to track progress within the array - one at the beginning and one at the very end
// Iterate towards the center until the pointers have met or crossed (left >= right)
// if the right value is a 5, decrement right pointer
// if the left value is not a 5, increment left pointer
// if the left value is a 5 and the right value is not a 5, swap the values, increment the left pointer and decrement the right pointer

// time complexity: linear O(n)
// space complexity: constant O(1)
const fiveSort = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    if (nums[left] === 5 && nums [right] != 5) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++;
      right--;
    } else if (nums[right] === 5) {
      right--;
    } else if (nums[left] != 5) {
      left++;
    } 
  }
  
  return nums;
};

// fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5] 

// fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 

// fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5] 

// fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5] 

// fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 

// const fives = new Array(20000).fill(5);
// const fours = new Array(20000).fill(4);
// const nums = [...fives, ...fours];
// fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]
