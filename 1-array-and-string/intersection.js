// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.
// You may assume that each input array does not contain duplicate elements.

// Approach
// Turn one of the arrays into a set for constant lookup time
// iterate through the other array and check if the set has each number
// if the set has the same value, then add it to the final output array

// time: linear O(n + m)
// space: linear O(n)
const intersection = (a, b) => {
  let setA = new Set(a);
  let intersections = []
  
  for(let num of b) {
    if (setA.has(num)) intersections.push(num)
  }
  
  return intersections;
};

// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
// intersection([2,4,6], [4,2]) // -> [2,4]
// intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
// intersection([0,1,2], [10,11]) // -> []

// const a = [];
// const b = [];
// for (let i = 0; i < 50000; i += 1) {
//   a.push(i);
//   b.push(i);
// }
// intersection(a, b) // -> [0,1,2,3,..., 49999]
