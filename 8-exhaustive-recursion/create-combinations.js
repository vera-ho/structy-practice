// Write a function, createCombinations, that takes in an array and a length as arguments. The function should return a 2D array representing all of the combinations of the specifized length.
// The items within the combinations and the combinations themselves may be returned in any order.
// You may assume that the input array contains unique elements and 1 <= k <= items.length.

// Approach
// Break the problem down until the base cases by taking the first element and recursively calling the function
//   Base case when k = 0 and when k > items.length
//   Return [] not [[]] when k > items.length because we don't want an extra empty array in the results
// Call createCombinations twice - once decrementing k and one keeping k the same with the remaining items
// Add first back to the results from decrementing k, then concatenate the two results

// Time complexity: O(n choose k) (look up binomial coefficient)
// Space complexity: O(n choose k)
// Binomial complexity occurs when order does not matter in a subset of k chosen from n items
const createCombinations = (items, k) => {
  if (k === 0) return [[]];
  if (k > items.length) return [];

  const first = items[0];
  const remainder = items.slice(1);
  const forUseWithFirst = createCombinations(remainder, k - 1);
  const ignoredFirst = createCombinations(remainder, k);

  // add first back to forUseWithFirst results
  const usingFirst = forUseWithFirst.map(combo => [first, ...combo]);
  return [...usingFirst, ...ignoredFirst];
};

// createCombinations(["a", "b", "c"], 2); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]

// createCombinations(["q", "r", "s", "t"], 2); // ->
// [
//   [ 'q', 'r' ],
//   [ 'q', 's' ],
//   [ 'q', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 't' ],
//   [ 's', 't' ]
// ]

// createCombinations(['q', 'r', 's', 't'], 3)); // ->
// [
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 's', 't' ],
//   [ 'r', 's', 't' ]
// ]

// createCombinations([1, 28, 94], 3); // ->
// [
//   [ 1, 28, 94 ]
// ]
