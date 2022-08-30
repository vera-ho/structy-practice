// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const undirectedPath = (edges, nodeA, nodeB) => {
    let graph = convertToGraph(edges);
    let stack = [ nodeA ];
    let visited = new Set();
    
    while(stack.length) {
        let current = stack.pop();
        if(current === nodeB) return true;
        
        if(!visited.has(current)) {
            visited.add(current)
            for(let node of graph[current]) {
            stack.push(node)
            }
        }
    }
    
    return false;
  };
  
// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Iterative BFS solution
const undirectedPathBFS = (edges, nodeA, nodeB) => {
    let graph = convertToGraph(edges);
    let queue = [ nodeA ];
    let visited = new Set(); 
    
    while(queue.length) {
        let current = queue.shift();
        if(current === nodeB) return true;
        
        if(!visited.has(current)) {
            visited.add(current)
            for(let node of graph[current]) {
            queue.push(node)
            }
        }
    }
    
    return false;
};

// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const undirectedPathRecursiveDFS = (edges, nodeA, nodeB) => {
    let graph = convertToGraph(edges);
    return findPath(graph, nodeA, nodeB);
};
  
const findPath = (graph, nodeA, nodeB, visited = new Set()) => {
    if(visited.has(nodeA)) return false;
    if(nodeA === nodeB) return true;
    
    visited.add(nodeA);
    for(let node of graph[nodeA]) {
        if(findPath(graph, node, nodeB, visited)) return true;
    }
    return false;
};

// Helper function
const convertToGraph = edges => {
    let graph = {};

    for(let connection of edges) {
        if(graph[connection[0]]) graph[connection[0]].push(connection[1]);
        else graph[connection[0]] = [connection[1]];
        
        if(graph[connection[1]]) graph[connection[1]].push(connection[0]);
        else graph[connection[1]] = [connection[0]];
    }

    // console.log(graph)
    // { 
    //   i: [ 'j', 'k' ], 
    //   j: [ 'i' ], 
    //   k: [ 'i', 'm', 'l' ], 
    //   m: [ 'k' ], 
    //   l: [ 'k' ], 
    //   o: [ 'n' ], 
    //   n: [ 'o' ] 
    // } 

    return graph;
}