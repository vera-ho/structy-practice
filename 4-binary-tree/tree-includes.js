// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative DFS Solution
const treeIncludes = (root, target) => {
    if(!root) return false;
    
    let stack = [root];
    while(stack.length > 0) {
        let node = stack.pop();
        if(node.val === target) return true;
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    
    return false;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS Solution
const treeIncludesRecursiveDFS = (root, target) => {
    if(!root) return false;
    if(root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

// Time complexity: O(n^2) quadratic due to shift
// Space complexity: O(n) linear
// Iterative BFS Solution
const treeIncludesIterativeBFS = (root, target) => {
    if(!root) return false;
    
    let queue = [root];
    while(queue.length > 0) {
        let current = queue.shift();  // O(n)
        if(current.val === target) return true;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return false;
};


const treeIncludes2 = (root, target) => {
  if (!root) return false;
  
  const structure = [root];
  while (structure.length) {
    // DFS - linear O(n)
    // const current = structure.pop();
    // if (current.val === target) return true;
    // if (current.right) structure.push(current.right);
    // if (current.left) structure.push(current.left);
    
    // BFS - quadratic O(n^2) due to shift in js
    const current = structure.shift();
    if (current.val === target) return true;
    if (current.left) structure.push(current.left);
    if (current.right) structure.push(current.right);
  }
  
  return false;
};

const treeIncludes2Rec = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};