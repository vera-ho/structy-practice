// Write a function, subsets, that takes in an array as an argument. The function should return a 2D array where each subarray represents one of the possible subsets of the array.
// The elements within the subsets and the subsets themselves may be returned in any order.
// You may assume that the input array contains unique elements.

// Approach
// Break up the problem by taking the first element and finding the subsets on the remainder of the array
// Take the subsets of the remaining array and add the firest element to each element in a duplicate array
// Concatenate the two subset arrays

// Time complexity: O(2^n) exponential
// Space complexity: O(2^n) exponential
const subsets = (elements) => {
  if (elements.length === 0) return [[]];
  const first = elements[0];
  const subsetsWithoutFirst = subsets(elements.slice(1));
  const subsetsWithFirst = subsetsWithoutFirst.map(sub => [first, ...sub]);
  return [...subsetsWithFirst, ...subsetsWithoutFirst];
};

// copy the 2D array and add a to each element
// if elements = [a, b, c]
// first = a | withoutfirst = [b, c]
//   subsets([b, c])
//      first = b | withoutFirst = [c]
//        subsets([c])
//           first = c | withoutFirst = []
//             subsets([])
//                base case -> returns [[]]
//           withFirst => [[c]]
//           returns [[], [c]]
//      withFirst => [[b], [b, c]]
//      returns [[], [b], [c], [b, c]]
//   withFirst => [[a], [a, b], [c, a], [a, b, c]]
//   returns [[], [a], [b], [c], [a, b], [a, c], [b, c] [a, b, c]]

// subsets(['a', 'b']); // ->
// [ 
//   [], 
//   [ 'b' ], 
//   [ 'a' ], 
//   [ 'a', 'b' ] 
// ]

// subsets(['a', 'b', 'c']); // ->
// [
//   [],
//   [ 'c' ],
//   [ 'b' ],
//   [ 'b', 'c' ],
//   [ 'a' ],
//   [ 'a', 'c' ],
//   [ 'a', 'b' ],
//   [ 'a', 'b', 'c' ]
// ]

// subsets(['x']); // ->
// [ 
//   [], 
//   [ 'x' ] 
// ]

// subsets([]); // ->
// [ 
//   []
// ]

// subsets(['q', 'r', 's', 't']); // ->
// [
//   [],
//   [ 't' ],
//   [ 's' ],
//   [ 's', 't' ],
//   [ 'r' ],
//   [ 'r', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 's', 't' ],
//   [ 'q' ],
//   [ 'q', 't' ],
//   [ 'q', 's' ],
//   [ 'q', 's', 't' ],
//   [ 'q', 'r' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 's', 't' ]
// ]