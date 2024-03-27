const hasCycle = (graph) => {
    const visiting = new Set();
    const visited = new Set();
    
    for(let node in graph) {
        let cycle = detectCycle(graph, node, visiting, visited);
        if(cycle) return true;
    }
    
    return false;
};

const detectCycle = (graph, node, visiting, visited) => {
    if(visiting.has(node)) return true;
    if(visited.has(node)) return false;
    visiting.add(node);
    
    for(let neighbor of graph[node]) {
        let cycle = detectCycle(graph, neighbor, visiting, visited);  
        if(cycle) return true;
    }
    
    visiting.delete(node);
    visited.add(node);
    return false;
};

// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.

// Approach: 
// Traverse every node in graph and store visited nodes
// white-grey-black algo for cycle detection
// white - unexplored / grey - in progress / black - fully visited

// Time complexity: linear O(e)
// Space complexity: linear O(n)
const hasCycle2 = (graph) => {
  const grey = new Set();
  const black = new Set();
    
  for (let node in graph) {
    const hasCycle = explore(graph, node, grey, black);
    if (hasCycle) return true;
  }
  return false;
};

const explore = (graph, node, grey, black) => {
  if (grey.has(node)) return true;
  if (black.has(node)) return false;
  
  // Node is unexplored and can move it to in-progress now
  grey.add(node);
  for (let nextNode of graph[node]) {
    const hasCycle = explore(graph, nextNode, grey, black);
    if (hasCycle) return true;
  }
  
  grey.delete(node);
  black.add(node);
  return false;
}

module.exports = {
  hasCycle,
};
