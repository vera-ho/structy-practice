// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const howHigh = (node) => {
    if(!node) return -1;
    let leftHeight = howHigh(node.left);
    let rightHeight = howHigh(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
};

// Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.
// The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.
// If the tree is empty, return -1.

// Approach: 
// Use recursive DFS to find max height of left or right paths, keeping the value of the max height
// Height is number of edges not number of nodes
// Return the max path + self
// Both complexities are linear O(n)
const howHigh2 = (node) => {
  if (!node) return -1;
  return Math.max(howHigh(node.left), howHigh(node.right)) + 1;
};