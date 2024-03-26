// Time complexity: O(e) linear
// Space complexity: O(n) linear
// DFS solution
const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;
    
    for(let node in graph) {
        console.log(visited)
        let traversed = traverseNode(graph, node, visited);
        if(traversed) count += 1;
    }

    return count;
};
  
const traverseNode = (graph, node, visited) => {
    if(visited.has(String(node))) return false;
    visited.add(String(node));

    for(let neighbor of graph[node]) {
        traverseNode(graph, neighbor, visited);
    }
    return true;
}

// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

// Approach: 
// Track components using a counter and visited nodes using a Set
// Traverse through entire adjacency list's nodes
// When the traversal can't go any further, add to counter

// Time complexity: O(e) linear
// Space complexity: O(n) linear
const connectedComponentsCount2 = (graph) => {
  let count = 0;
  const visited = new Set();
  
  for(const node in graph) {
    if (!visited.has(String(node))) {
      traverse(graph, node, visited);
      count++;
    }
  }
  
  return count;
};

// Traverse all paths starting from this node and add traversed nodes to visited
const traverse = (graph, node, visited) => {  
  // Recursive DFS
  // if(visited.has(node)) return;
  // visited.add(String(node));
  
  // for (const neighbor of graph[node]) {
  //   if (!visited.has(String(neighbor))) {
  //     traverse(graph, neighbor, visited)
  //   }   
  // }
  
  // Iterative BFS
  const queue = [node];
  
  while (queue.length) {
    const current = queue.shift();
    visited.add(String(current))
    for (const neighbor of graph[current]) {
      if (!visited.has(String(neighbor))) queue.push(neighbor)
    }
  }
}