// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const hasPath = (graph, src, dst) => {
    const stack = [ src ];
    
    while(stack.length > 0) {
        let current = stack.pop();
        if(current === dst) return true;
        
        for(let node of graph[current]) {
            stack.push(node);
        }
    }
    
    return false;
};

// Time complexity: 
// Space complexity: 
// Recursive DFS solution
const hasPathRecursiveDFS = (graph, src, dst) => {
    if(src === dst) return true;
  
    for(let node of graph[src]) {
        let pathFound = hasPath(graph, node, dst);
        if(pathFound) return true;
    }
    
    return false;
};