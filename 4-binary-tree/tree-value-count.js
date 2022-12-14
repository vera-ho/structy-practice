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