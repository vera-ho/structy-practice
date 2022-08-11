const maxValue = (nums) => {
    let max = nums[0];
    nums.forEach( number => {
        if(number > max) {
            max = number;
        }
    })
    return max;
};
  
module.exports = {
    maxValue,
};