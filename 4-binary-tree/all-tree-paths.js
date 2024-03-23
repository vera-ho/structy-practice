/** Approach
 *      - Base cases:
 *          * root is null, return empty array
 *          * root has no children, return 2D array with root value
 *      - Find paths of children nodes
 *      - Concatenate paths together
 *      - Add current node value to each subarray 
 */

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// DFS Recursive solution
const allTreePaths = (root) => {
    if(!root) return [];
    if(!root.left && !root.right) return [[ root.val ]];
    
    let paths = [];
    const leftPath = allTreePaths(root.left);
    const rightPath = allTreePaths(root.right);
    
    paths = paths.concat(leftPath, rightPath);
    paths.forEach( path => path.unshift(root.val))
    return paths;
};

// Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.
// The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.
// You may assume that the input tree is non-empty.

// Approach: 
// Use recursive DFS and take all left & right results 
// Add the current node's value to the beginning of each array.
// Base case is when we find a leaf node or a null node

// Time complexity: linear O(n)
// Space complexity: linear O(n)
const allTreePaths2 = (root) => {
  if (!root) return [];
  if(!root.left && !root.right) return [[root.val]]; // Leaf node found
  
  // Get all the paths from the left and right paths from this node
  let leftPath = allTreePaths(root.left);
  let rightPath = allTreePaths(root.right);
  
  // Add current node's value to the paths
  leftPath.forEach(path => path.unshift(root.val));
  rightPath.forEach(path => path.unshift(root.val));
  return [...leftPath, ...rightPath];
};