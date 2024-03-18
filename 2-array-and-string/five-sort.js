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

// old
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
}

