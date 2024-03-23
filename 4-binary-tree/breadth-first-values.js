// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time complexity: O(n^2) quadratic - shift is O(n)
// Space complexity: O(n) linear
// Iterative solution
const breadthFirstValues = (root) => {
    if(!root) return [];
    
    // use array to represent queue (FIFO)
    let queue = [root];
    let values = [];
    
    while(queue.length > 0) {
        let current = queue.shift();
        values.push(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right)
    }
    
    return values;
};

// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.
// Approach: 
// Use a queue (FIFO) structure to hold nodes
// For each node, starting at root, add left and right nodes to the queue
// Save values to array in order of the queue
// Time complexity: linear O(n)
// Space complexity: linear O(n)
const breadthFirstValues2 = (root) => {
  if (!root) return [];
  const queue = [root];
  const values = [];
  
  while (queue.length) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    values.push(node.val);
  }
  
  return values
};