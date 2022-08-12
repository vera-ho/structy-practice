// Time complexity: O(n) linear
// Space complexity: O(n) linear
const pairProduct = (numbers, targetProduct) => {
    let values = {}
    
    for(let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let factor = targetProduct / num;
        
        if(factor in values) return [values[factor], i]
        if(!values[num]) values[num] = i;
    }
};
  
// pairProduct([3, 2, 5, 4, 1], 8);      // -> [1, 3]
// pairProduct([3, 2, 5, 4, 1], 10);     // -> [1, 2]
// pairProduct([4, 7, 9, 2, 5, 1], 5);   // -> [4, 5]
// pairProduct([4, 7, 9, 2, 5, 1], 35);  // -> [1, 4]
// pairProduct([3, 2, 5, 4, 1], 10);     // -> [1, 2]
// pairProduct([4, 6, 8, 2], 16);        // -> [2, 3]