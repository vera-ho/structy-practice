// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const maxPathSum = (root) => {
    if(!root) return -Infinity;
    if(!root.left && !root.right) return root.val;
    
    let leftMax = maxPathSum(root.left);
    let rightMax = maxPathSum(root.right);
    
    return root.val + Math.max(leftMax, rightMax);
};

// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.
// You may assume that the input tree is non-empty.
// Approach: 
// Use recursive DFS to calcuate sums of paths. Know node is a leaf if there are no children.
// Count running sum starting with root (yay recursion) by taking the bigger sum on left or right and adding to self
// Time complexity: linear O(n)
// Space complexity: linear O(n)
const maxPathSum2 = (root) => {
  if (!root) return -Infinity; 
  if (!root.left && !root.right) return root.val; // Leaf found
  
  const maxLeft = maxPathSum(root.left);
  const maxRight = maxPathSum(root.right);
  return maxLeft > maxRight ? root.val + maxLeft : root.val + maxRight
};