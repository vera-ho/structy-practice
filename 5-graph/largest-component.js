// Time complexity: O(e) linear
// Space complexity: O(n) linear
const largestComponent = (graph) => {
    const visited = new Set();
    let maxCount = 0;
    
    for(let node in graph) {
        let count = traverseNode(graph, node, visited);
        if(count > maxCount) maxCount = count
    }
    
    return maxCount;
};
  
const traverseNode = (graph, node, visited) => {
    if(visited.has(String(node))) return 0;
    visited.add(String(node))
    
    let count = 1;
    for(let neighbor of graph[node]) {
        count += traverseNode(graph, neighbor, visited);
    }
    
    return count;
}

// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

// Approach: 
// Track the max component count and track the count for each component during a traversal
// Track visited nodes using a Set
// Traverse every node in the adjacency list if it hasn't been visited yet and add to counter

// Time complexity: linear O(e)
// Space complexity: linear O(n)
const largestComponent2 = (graph) => {
  const visited = new Set();
  let maxCount = 0;

  for (const node in graph) {
    if (!visited.has(node)) {
      let count = traverseNode(node, graph, visited);
      if (count > maxCount) maxCount = count;
    } 
  }
  
  return maxCount;
};

// Iterative
const traverseNode2Iterative = (node, graph, visited) => {
  const stack = [node]; 
  visited.add(node)
  let count = 0; 
  
  while (stack.length) {
    const current = stack.pop();
    count++;
    
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // so it can't be added to the stack again
        stack.push(neighbor);
      }
    }
  }
  
  return count;
}

// Recursive
const traverseNode2Recursive = (node, graph, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let count = 1; // count self
  
  for(const neighbor of graph[node]) {
    count += traverseNode(neighbor, graph, visited);
  }
  
  return count;
}