/**
 * Time complexity: O(n) linear
 * Space complexity: O(1) constant
 */
 const flipTree = (root) => {
    if(!root) return root;
    const left = flipTree(root.left);
    const right = flipTree(root.right);
    
    root.right = left;
    root.left = right;
    return root;
};