// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const treeMinValue = (root) => {
    let stack = [root];
    let minVal = Infinity;
    
    while(stack.length > 0) {
        let node = stack.pop();
        if(minVal > node.val) minVal = node.val;
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return minVal;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const treeMinValueRecursive = (root) => {
    if(!root) return Infinity;
    let leftMin = treeMinValue(root.left);
    let rightMin = treeMinValue(root.right);
    return Math.min(root.val, leftMin, rightMin);
};

// Time complexity: O(n^2) quadratic due to shift
// Space complexity: O(n) linear
// Iterative BFS solution
const treeMinValueBFS = (root) => {
    let minVal = Infinity;
    let queue = [root];
    
    while(queue.length > 0) {
        let currentNode = queue.shift();
        if(minVal > currentNode.val) minVal = currentNode.val;
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
    }
    
    return minVal;
};

// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.
const treeMinValue2 = (root) => {
  let minValue = Infinity;
  
  // stack for DFS & queue for BFS
  const nodes = [ root ];
  while (nodes.length) {
    // DFS - linear O(n) time and space
    // const current = nodes.pop();
    // if (current.right) nodes.push(current.right);
    // if (current.left) nodes.push(current.left);
    // if (minValue > current.val) minValue = current.val;
    
    // BFS - quadratic O(n^2) time and linear O(n) space
    const current = nodes.shift();
    if (current.left) nodes.push(current.left);
    if (current.right) nodes.push(current.right);
    if (minValue > current.val) minValue = current.val;
  }
  
  return minValue;
};

const treeMinValue2Rec = (root) => {
  if (!root) return Infinity;
  const minLeft = treeMinValue(root.left);
  const minRight = treeMinValue(root.right);
  return Math.min(root.val, minLeft, minRight);
};
