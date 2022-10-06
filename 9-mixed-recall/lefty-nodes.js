/**
 * Time complexity: O(n) linear
 * Space complexity: O(n) linear
 */
 const leftyNodes = (root) => {
    if(!root) return [];
    const leftNodes = [];
    const stack = [ [root, 0] ];
    
    while(stack.length) {
        let [current, lvl] = stack.pop();
        if(current.right) stack.push([current.right, lvl + 1]);
        if(current.left) stack.push([current.left, lvl + 1]);
        if(!leftNodes[lvl]) leftNodes[lvl] = current.val;
    }
    
    return leftNodes;
};

/** 
 * Recursive DFS solution
 * Time complexity: O(n) linear
 * Space complexity: O(n) linear
 */
 const leftyNodesRecursive = (root) => {
    const values = [];
    findNodes(root, 0, values);
    return values;
};

const findNodes = (node, level, values) => {
    if(!node) return null;
    if(!values[level]) values.push(node.val);
    findNodes(node.left, level + 1, values);
    findNodes(node.right, level + 1, values);
}

