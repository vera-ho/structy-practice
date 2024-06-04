// Time complexity: O(n + m) linear 
// Space complexity: O(n) linear

const intersection = (a, b) => {
    let common = [];
    let values = new Set(a);
    
    b.forEach( num => {
        if(values.has(num)) common.push(num)
    })
    
    return common;
};
  
// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

// approach
// Turn one of the arrays into a set for constant lookup time
// iterate through the other array and check if the set has each number
// if the set has the same value, then add it to the final output array
// time: linear O(min(n, m))
// space: linear O(n + m)
const intersection2 = (a, b) => {
  let setA = new Set(a);
  let intersections = []
  
  for(let num of b) {
    if (setA.has(num)) {
      intersections.push(num)
    }
  }
  
  return intersections;
};