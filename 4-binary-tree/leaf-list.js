// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const leafList = (root) => {
    if(!root) return [];
    
    const leaves = [];
    const stack = [ root ];
    
    while(stack.length > 0) {
        let node = stack.pop();
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
        if(!node.left && !node.right) leaves.push(node.val);
    }
    
    return leaves;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const leafListRecursive = (root) => {
    if(!root) return [];
    if(!root.left && !root.right) return [root.val]
    return [...leafList(root.left), ...leafList(root.right)]
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// BFS solution
const leafListBFS = (root) => {
    if(!root) return [];
    
    const leaves = [];
    const queue = [ root ];
    
    while(queue.length > 1) {
        let node = queue.shift();
        if(node.left) queue.push(node.left); 
        if(node.right) queue.push(node.right);
        if(!node.left && !node.right) leaves.push(node.val);
    }
    
    return leaves;
}