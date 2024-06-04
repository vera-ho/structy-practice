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

module.exports = {
  sumNumbersRecursive,
};
