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


// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

// Approach: 
// Turn edges into an undirected graph
// Track visited nodes since graph is undirected (infinite loop prevention) using a set for constant lookup and add times

// Iterate though each edge and add node key to the object if it doesn't exist yet
// Add the neighbor to the node if it hasn't been added yet
// No need to check if a neighbor already exists since the edge happens only once per set of nodes
const edgesToGraph = edges => {
  const graph = {};
  
  for(let edge of edges) {
    // set first node (edge[0])
    if(edge[0] in graph) graph[edge[0]].push(edge[1])
    else graph[edge[0]] = [edge[1]]
    // set second node (edge[1])
    if(edge[1] in graph) graph[edge[1]].push(edge[0])
    else graph[edge[1]] = [edge[0]]
  }
  
  return graph;
}

// Time complexity: quadratic O(n^2) or linear O(e)
// Space complexity: linear O(n) 
const undirectedPath2BFS = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  const visited = new Set();
  const queue = [nodeA];
  
  while (queue.length) {
    const current = queue.shift();
    if(current === nodeB) return true;
    
    // Add current node to visited set so we don't revisit it
    visited.add(current);
    
    // Add neighbors to queue if they haven't been visited yet
    for(let neighbor of graph[current]) {
      if(!visited.has(neighbor)) queue.push(neighbor)
    }
  }
  
  return false;
};

// Time complexity: quadratic O(n^2) or linear O(e)
// Space complexity: linear O(n) 
const undirectedPath2RecDFS = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  const visited = new Set();
  return hasPath(graph, nodeA, nodeB, visited);
};

// Helper
const hasPath = (graph, origin, destination, visited) => {
  if(origin === destination) return true;
  visited.add(origin);
  
  for (let neighbor of graph[origin]) {
    // If the neighbor hasn't been visited yet, check if it has path to destination
    if(!visited.has(neighbor) && hasPath(graph, neighbor, destination, visited)) return true;
  }
  return false;
}