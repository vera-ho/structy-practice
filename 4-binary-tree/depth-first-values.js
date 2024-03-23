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
    
    // Uses a stack -> array; only add/remove from one end (LIFO)
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

// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.
// Approach: 
// Depth first: Check all values going deep into the tree first to the leaves (i.e. left) before checking right nodes
// Use a stack (FILO) to track progress - check if left and right nodes exist and add existing nodes to stack 
// Add value to an array when the node is 'used' (not added to the stack)
// Time complexity: linear O(n)
// Space complexity: linear O(n)
const depthFirstValues2 = (root) => {
  if (!root) return [];
  
  // set arrays to hold stack of nodes and values
  const stack = [ root ];
  const values = []
  
  // iterate through all nodes in the binary tree
  while(stack.length) {
    // take the top node in stack and add any possible children to the stack
    const node = stack.pop();
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    
    // save the value of the current node to the output array
    values.push(node.val);
  }
  
  return values;
};

// Time complexity: linear O(n)
// Space complexity: linear O(n)
const depthFirstValues2Rec = (root) => {
  // if tree is empty, output is empty array
  if (!root) return [];
  
  // if left/right nodes exist, run the fn with each node as its own 'root' and save the resulting array of values
  const left = depthFirstValues(root.left);
  const right = depthFirstValues(root.right);
  
  // concatentate root, left and right values together
  return [root.val, ...left, ...right]
};