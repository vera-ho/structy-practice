// Time complexity: O(n) linear
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

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const levelAverages2 = (root) => {
    if(!root) return [];
    
    const treeLevelValues = [];
    const stack = [ { node: root, level: 0 } ];
    
    // Get all level values first
    while(stack.length > 0) {
        let { node, level } = stack.pop();
        if(node.right) stack.push({ node: node.right, level: level + 1});
        if(node.left) stack.push({ node: node.left, level: level + 1});
        
        if(treeLevelValues[level]) treeLevelValues[level].push(node.val);
        else treeLevelValues[level] = [node.val];
    }
  
    // Then calculate averages
    const averages = treeLevelValues.map( level => {
        let sum = level.reduce( (a, b) => a + b, 0);
        return sum / level.length;
    })
    
    return averages;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const levelAveragesRecursive = (root) => {
    const values = [];
    
    const levelValues = (root, level, values) => {
        if(!root) return;
        
        if(values[level]) values[level].push(root.val);
        else values[level] = [root.val];
        
        if(root.left) levelValues(root.left, level + 1, values);
        if(root.right) levelValues(root.right, level + 1, values);
    }
    
    levelValues(root, 0, values);

    const averages = values.map( level => {
        let sum = level.reduce( (a, b) => a + b, 0);
        return sum / level.length;
    })
    
    return averages;
};