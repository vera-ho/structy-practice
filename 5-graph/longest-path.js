// Time complexity: O(e) linear
// Space complexity: O(n) linear
const longestPath = (graph) => {
    let longest = 0;
    
    for(let node in graph) {
        let length = traverseNode(graph, node);
        if(length > longest) longest = length;
    }
    
    return longest;
};

const traverseNode = (graph, node, pathLengths) => {
    if(graph[node].length === 0) return 0;
    let tempLength = 0;
    
    for(let neighbor of graph[node]) {
        let length = traverseNode(graph, neighbor);
        if(length > tempLength) tempLength = length;
    }
    
    return tempLength + 1;
}

// Time complexity: O(e) linear
// Space complexity: O(n) linear
const longestPathTracked = (graph) => {
    // Track visited nodes, prevent redundant traversals
    let pathLengths = {};
    
    // Find terminal nodes
    for(let node in graph) {
        if(graph[node].length === 0) pathLengths[node] = 0;
    }
    
    // Calculate lengths - DFS recursive
    for(let node in graph) {
        traverseNode(graph, node, pathLengths);
    }
    
    return Math.max(...Object.values(pathLengths));
  };

  const traverseNodeTracked = (graph, node, pathLengths) => {
    if(node in pathLengths) return pathLengths[node];
    
    let max = 0;
    for(let neighbor of graph[node]) {
        let length = traverseNode(graph, neighbor, pathLengths);
        if(length > max) max = length;
    }
    
    pathLengths[node] = max + 1;
    return pathLengths[node];
}