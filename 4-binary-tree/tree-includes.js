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