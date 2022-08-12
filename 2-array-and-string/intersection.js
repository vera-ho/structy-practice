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
