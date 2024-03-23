// Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.
// You may assume that the input tree is non-empty.

// Approach: 
// Depth takes precedence over right-ness
// Use BFS since we can see each level, adding left then right children (so right is visited later)
// The last value is the bottom most and right most value

// Time complexity: O(n^2) quadratic
// Space complxity: O(n) linear
const bottomRightValue = (root) => {
  const queue = [root];
  let current = null;
  
  while(queue.length) {
    current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  
  return current.val;
};