// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time complexity: O(n)
// Space complexity: O(n)
// Iterative solution
const depthFirstValues = (root) => {
    if(!root) return [];
    
    // Uses a stack -> array; only add/remove from one end (FILO)
    let stack = [root];
    let values = [];
    
    while(stack.length > 0) {
        let current = stack.pop();
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
        values.push(current.val)
    }
    return values;  
};

// Time complexity: O(n)
// Space complexity: O(n)
// Recursive solution
const depthFirstValuesRecursive = (root) => {
    if(!root) return [];
    if(!root.left && !root.right) return [root.val];   // not necessary
    
    let left = depthFirstValues(root.left);
    let right = depthFirstValues(root.right);
    return [root.val, ...left, ...right];
    // return [root.val].concat(left, right); // both work
};