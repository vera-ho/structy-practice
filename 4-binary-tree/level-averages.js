// Time complexity: O(n^2) quadratic - Average calculation nested loop
// Space complexity: O(n) linear
// Iterative DFS solution
const levelAverages = (root) => {
    if(!root) return [];
    
    const treeLevelValues = [];
    const averages = [];
    const stack = [ { node: root, level: 0 } ];
    
    // Get all level values first
    while(stack.length > 0) {
        let { node, level } = stack.pop();
        if(node.right) stack.push({ node: node.right, level: level + 1});
        if(node.left) stack.push({ node: node.left, level: level + 1});
        
        if(treeLevelValues[level]) treeLevelValues[level].push(node.val);
        else treeLevelValues[level] = [node.val];
    }
    
    // Calculate averages
    for(let level of treeLevelValues) {
        let sum = level.reduce( (a, b) => a + b, 0);
        averages.push(sum / level.length)
    }
    
    return averages;
};