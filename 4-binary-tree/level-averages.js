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

// Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.
// Approach - Iterative (using BFS cause prev prob used DFS and the prob is very similar)
// Find all the values for each level and store in a 2D array
// Calculate the averge for each level and save to an array
// Time complexity: linear O(n)
// Space complexity: linear O(n)
const levelAverages3 = (root) => {
  if (!root) return []; 
  const queue = [[root, 0]] // [node, level]
  const values = [];
  const averages = [];
  
  // get a 2D array with the values of each level of the tree
  while (queue.length) {
    const [current, level] = queue.shift();
    if (current.left) queue.push([current.left, level + 1])
    if (current.right) queue.push([current.right, level + 1])
    if (values[level]) values[level].push(current.val)
    else values[level] = [current.val]
  }
  
  // calculate the averages for each level
  for (let i = 0; i < values.length; i++) {
    let sum = 0;
    values[i].forEach(num => sum += num)
    averages[i] = sum / values[i].length;
  }
  return averages;
};

const levelAverages2Rec = (root) => {
  if (!root) return []; 
  const averages = [];
  
  // get the values of every level saved to a 2D array recursively
  const treeLevels = (root, values = [], level = 0) => {
    if (!root) return [];
    if (values[level]) values[level].push(root.val)
    else values[level] = [root.val]
    
    const left = treeLevels(root.left, values, level + 1)
    const right = treeLevels(root.right, values, level + 1)
    return values;
  }

  const values = treeLevels(root);
  
  // calculate the averages
  values.forEach(numbers => averages.push(numbers.reduce((sum, num) => sum + num, 0) / numbers.length))
  return averages;
};
