// Time complexity: O(n)
// Space complexity: O(n)
// Iterative solution with DFS
const treeSum = (root) => {
    if(!root) return 0;
    
    const stack = [root];
    let sum = 0;
    
    while(stack.length > 0) {
        let currentNode = stack.pop();
        sum += currentNode.val;
        if(currentNode.left) stack.push(currentNode.left);  
        if(currentNode.right) stack.push(currentNode.right);
    }
    
    return sum;
};

// Time complexity: O(n)
// Space complexity: O(n)
// Recursive solution with DFS
const treeSumRecursiveDFS = (root) => {
    if(!root) return 0;
    let leftSum = treeSum(root.left);
    let rightSum = treeSum(root.right);
    return root.val + leftSum + rightSum;
};

// Time complexity: O(n)
// Space complexity: O(n)
// Iterative solution with BFS
const treeSumIterativeBFS = (root) => {
    if(!root) return 0;
    let queue = [root];
    let sum = 0;
    
    while(queue.length > 0) {
        let currNode = queue.shift();
        sum += currNode.val;
        if(currNode.left) queue.push(currNode.left);
        if(currNode.right) queue.push(currNode.right);
    }
    
    return sum;
};