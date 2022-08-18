// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const treeMinValue = (root) => {
    let stack = [root];
    let minVal = Infinity;
    
    while(stack.length > 0) {
        let node = stack.pop();
        if(minVal > node.val) minVal = node.val;
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return minVal;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const treeMinValueRecursive = (root) => {
    if(!root) return Infinity;
    let leftMin = treeMinValue(root.left);
    let rightMin = treeMinValue(root.right);
    return Math.min(root.val, leftMin, rightMin);
};

