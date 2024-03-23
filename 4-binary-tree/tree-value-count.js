// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const treeValueCount = (root, target) => {
    if(!root) return 0;
    let count = 0;
    let stack = [root];
    
    while(stack.length > 0) {
        let node = stack.pop();
        if(node.right) stack.push(node.right)  
        if(node.left) stack.push(node.left)
        if(node.val === target) count++;
    }
    return count;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const treeValueCountDFSRecursive = (root, target) => {
    if(!root) return 0;
    let childCount = treeValueCount(root.left, target) + treeValueCount(root.right, target);
    if(root.val === target) return (childCount + 1)
    else return (childCount)
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative BFS solution
const treeValueCountBFSIterative = (root, target) => {
    if(!root) return 0;
    let queue = [ root ];
    let count = 0;
    
    while(queue.length > 0) {
        let node = queue.shift();
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
        if(node.val === target) count++;
    }
    
    return count;
};

// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.
// Approach: Iterate through list using DFS or BFS and add to a counter every time the target is found
// Time complexity: DFS O(n) and BFS O(n^2)
// Space complexity: O(n)
const treeValueCount2 = (root, target) => {
  if (!root) return 0;
  const stack = [root];
  let count = 0;
  
  // For BFS, shift instead of pop from a queue
  while (stack.length) {
    const current = stack.pop();
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
    if (current.val === target) count++;
  }
  
  return count;
};

const treeValueCount2Rec = (root, target) => {
  if (!root) return 0;
  const leftCount = treeValueCount(root.left, target);
  const rightCount = treeValueCount(root.right, target);
  return leftCount + rightCount + (root.val === target ? 1 : 0);
};

const treeValueCountRecWhy = (root, target) => {
  return !root ? 0 : ((treeValueCount(root.left, target)) + (treeValueCount(root.right, target)) + ((root.val === target ? 1 : 0)))
};