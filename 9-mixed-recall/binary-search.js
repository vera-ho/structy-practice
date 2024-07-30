// Write a function, binarySearch, that takes in a sorted array of numbers and a target. The function should return the index where the target can be found within the array. If the target is not found in the array, then return -1.
// You may assume that the input array contains unique numbers sorted in increasing order.
// Your function must implement the binary search algorithm.

// Approach
// Track left and right index that make up the subarray
// Calculate mid index/value and compare to target
// If target is larger than mid value, update left pointer to middle index + 1
// If target is less than mid value, update right pointer to middle index - 1
// Exclude middle index because it's already been checked and is not the target
// Keep searching until the left pointer crosses the right pointer

// Time complexity: O(logn) logarithmic
// Space complexity: O(1) constant
const binarySearchPointers = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === numbers[mid]) return mid;
    if (target < numbers[mid]) {
      right = mid - 1;
    } else { // target > numbers[mid]
      left = mid + 1;
    }    
  }

  return -1;
};

// binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6); // -> 6
// binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27); // -> -1
// binarySearch([0, 6, 8, 12, 16, 19, 20, 28], 8); // -> 2
// binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28); // -> 8
// binarySearch([7, 9], 7); // -> 0
// binarySearch([7, 9], 9); // -> 1
// binarySearch([7, 9], 12); // -> -1
// binarySearch([7], 7); // -> 0
// binarySearch([], 7); // -> -1
