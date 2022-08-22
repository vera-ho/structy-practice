// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const howHigh = (node) => {
    if(!node) return -1;
    let leftHeight = howHigh(node.left);
    let rightHeight = howHigh(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
};

