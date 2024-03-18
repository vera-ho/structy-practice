// Time complexity: O(n) linear
// Space complexity: O(1) constant

const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    
    while(i < j) {
        if(nums[j] == 5) {
            j--;
        } else if(nums[i] == 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        } else {
            i++;
        }
    }
    return nums;
};
  
// fiveSort([12, 5, 1, 5, 12, 7]); // -> [12, 7, 1, 12, 5, 5] 
// fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]); // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
  
module.exports = {
    fiveSort,
};

const fiveSort2 = (nums) => {
  let fiveIdx = nums.length - 1;
  let frontIdx = 0;
  
  while(frontIdx < fiveIdx) {
    if(nums[frontIdx] === 5 && nums[fiveIdx] !== 5) {
      [nums[frontIdx], nums[fiveIdx]] = [nums[fiveIdx], nums[frontIdx]];
      frontIdx += 1;
      fiveIdx -= 1;
    } else if(nums[fiveIdx] === 5) {
      fiveIdx -= 1;
    } else {
      frontIdx += 1;
    }
  }

  return nums;
}

// approach
// Use two pointers to track progress within the array - one at the beginning and one at the very end
// Iterate until the pointers have met or crossed (left >= right)
// if the right value is a 5, decrement right pointer
// if the left value is not a 5, increment left pointer
// if the left value is a 5 and the right value is not a 5, swap the values, increment the left pointer and decrement the right pointer
// time complexity: linear O(n)
// space complexity: constant O(1) - in place operation
const fiveSort3 = (nums) => {
  let left = 0;
  let right = nums.length -1;
  
  while (left < right) {
    if (nums[left] === 5 && nums [right] != 5) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
    } else if (nums[right] === 5) {
      right--;
    } else if (nums[left] != 5) {
      left++;
    } 
  }
  
  return nums;
};