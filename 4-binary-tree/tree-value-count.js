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

