// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.

// Approach:
// Take the first item and recursively call the rest of the array
// Take the result of the recursive call and add it to the first item

// TC: Quadratic O(n^2)
// SC: Quadratic O(n^2)
const sumNumbersRecursive = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  const [firstNum, ...otherNumbers] = numbers;
  return firstNum + sumNumbersRecursive(otherNumbers);
};

// optimize using pointer?
// TC: O(n) linear
// SC: O(n) linear
const sumNumbersRecursiveOptimized = (numbers, ptr = 0) => {
  if (ptr === numbers.length) return 0;
  return numbers[ptr] + sumNumbersRecursiveOptimized(numbers, ptr + 1);
};

// sumNumbersRecursive([5, 2, 9, 10]); // -> 26
// sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1
// sumNumbersRecursive([]); // -> 0
// sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]); // -> 1001
// sumNumbersRecursive([700, 70, 7]); // -> 777
// sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55
// sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // -> 0
