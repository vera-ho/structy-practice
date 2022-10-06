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