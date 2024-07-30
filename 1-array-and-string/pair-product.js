// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair whose product is the target.

// Approach
// Keep an object that stores a complement with it's index in the array [complement, index]
// For each number in the array, check if the number is in the complements, otherwise add it

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const pairProduct = (numbers, targetProduct) => {
  const complements = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetProduct / num;
    if (complement in complements) return [complements[complement], i];
    complements[num] = i;
  }
};

// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
// pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
// const numbers = [];
// for (let i = 0; i <= 30000; i += 1) {
//   numbers.push(i);
// }
// pairProduct(numbers, 899970000); // -> [ 29999, 30000 ] 
