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

// Time complexity: O(n^2) quadratic - spread operator is O(n)
// Space complexity: O(n) linear
// Recursive DFS solution
const leafListRecursive = (root) => {
    if(!root) return [];
    if(!root.left && !root.right) return [root.val]
    return [...leafList(root.left), ...leafList(root.right)]
};

// // Time complexity: O(n) linear
// // Space complexity: O(n) linear
// // Recursive DFS solution
const leafListRecursive2 = (root) => {
    const leaves = [];
    const leafFinder = (root, leaves) => {
        if(!root) return;
        if(!root.left && !root.right) leaves.push(root.val);
        if(root.left) leafFinder(root.left, leaves);
        if(root.right) leafFinder(root.right, leaves);
    }
    
    leafFinder(root, leaves);
    return leaves;
};