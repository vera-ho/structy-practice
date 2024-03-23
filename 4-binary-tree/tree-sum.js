// Time complexity: O(n)
// Space complexity: O(n)
// Iterative solution with DFS
const treeSum = (root) => {
    if(!root) return 0;
    
    const stack = [root];
    let sum = 0;
    
    while(stack.length > 0) {
        let currentNode = stack.pop();
        sum += currentNode.val;
        if(currentNode.left) stack.push(currentNode.left);  
        if(currentNode.right) stack.push(currentNode.right);
    }
    
    return sum;
};

// Time complexity: O(n)
// Space complexity: O(n)
// Recursive solution with DFS
const treeSumRecursiveDFS = (root) => {
    if(!root) return 0;
    let leftSum = treeSum(root.left);
    let rightSum = treeSum(root.right);
    return root.val + leftSum + rightSum;
};

// Time complexity: O(n)
// Space complexity: O(n)
// Iterative solution with BFS
const treeSumIterativeBFS = (root) => {
    if(!root) return 0;
    let queue = [root];
    let sum = 0;
    
    while(queue.length > 0) {
        let currNode = queue.shift();
        sum += currNode.val;
        if(currNode.left) queue.push(currNode.left);
        if(currNode.right) queue.push(currNode.right);
    }
    
    return sum;
};

// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.
// Approach: 
// Use DFS or BFS to iterate through every node and add values to a running sum
// Time complexity: linear O(n) for DFS and quadratic O(n^2) for BFS
// Space complexity: linear O(n)
const treeSum2 = (root) => {
  if (!root) return 0;
  
  let sum = 0;
  
  // BFS
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    sum += current.val;
  }
  
  // DFS
//   const stack = [ root ];
//   while (stack.length) {
//     const current = stack.pop();
//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//     sum += current.val;
//   }
  
  return sum;
};