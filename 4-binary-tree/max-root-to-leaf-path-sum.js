// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const maxPathSum = (root) => {
    if(!root) return -Infinity;
    if(!root.left && !root.right) return root.val;
    
    let leftMax = maxPathSum(root.left);
    let rightMax = maxPathSum(root.right);
    
    return root.val + Math.max(leftMax, rightMax);
};