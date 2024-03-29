// Time complexity: O(n) linear? - is concat O(n) or O(1)?? Note: Structy says [root.val, ...leftPath] is O(n) on its own; totoal O(n^2)
// Space complexity: O(n) linear
// Recursive DFS solution
const pathFinder = (root, target) => {
    if(!root) return null;
    if(root.val === target) return [root.val];
    
    let leftPath = pathFinder(root.left, target);
    if(leftPath) return [root.val].concat(leftPath);
    
    let rightPath = pathFinder(root.right, target);
    if(rightPath) return [root.val].concat(rightPath);
  
    return null;
};


// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution that is O(n) using .push() and .reverse() and a helper function
const pathFinderWithPush = (root, target) => {
  let arr = pathFinderHelp(root, target);
  if(!arr) return null
  else return arr.reverse();
}

const pathFinderHelp = (root, target) => {
    if(!root) return null;
    if(root.val === target) return [root.val];
    
    let leftPath = pathFinderHelp(root.left, target);
    if(leftPath) {
      leftPath.push(root.val);
      return leftPath
    }
        
    let rightPath = pathFinderHelp(root.right, target);
    if(rightPath) {
      rightPath.push(root.val);
      return rightPath;
    }
  
    return null;
  };
  

// Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.
// You may assume that the tree contains unique values.

// Approach: 
// Recursive DFS to pathfind
// When value is found, return array with the values of each node in the path going back 'up'
// Return null when a path doesn't have the value
const pathFinder2 = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];
  
  const left = pathFinder(root.left, target);
  const right = pathFinder(root.right, target);
  if (left) return [root.val, ...left];
  if (right) return [root.val, ...right];
  return null;
};