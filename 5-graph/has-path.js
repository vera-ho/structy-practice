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

// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const hasPathRecursiveDFS = (graph, src, dst) => {
    if(src === dst) return true;
  
    for(let node of graph[src]) {
        let pathFound = hasPath(graph, node, dst);
        if(pathFound) return true;
    }
    
    return false;
};

// Time complexity: O(e) linear
// Space complexity: O(n) linear
// BFS solution
const hasPathBFS = (graph, src, dst) => {
    let queue = [ src ];
    
    while(queue.length > 0) {
      let current = queue.shift();
      if(current === dst) return true;
      
      for(let node of graph[current]) {
        queue.push(node)
      }
    }
    
    return false;
  };


// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

// Approach: 
// DFS/BFS iteratively: For each key (node) of the adjacency list, check neighbors and add to stack/queue to traverse the graph
// To find if the path from src to dst exists, traverse starting with src node
// If we find a node with dst, then we know the path exists

// Time complexity: O(e) // edges to traverse
// Space complexity: O(n) // stack or queue size growth
const hasPath2DFS = (graph, src, dst) => {
  const stack = [src];

  while (stack.length) {
    if (node === dst) return true;
    const node = stack.pop();

    for (let neighbor of graph[node]) {
      stack.push(neighbor)
    }
  }

  return false;
};

// Time complexity: O(n^2) quadratic or O(e) linear (e is edges)
// Space complexity: O(n) linear
const hasPath2Rec = (graph, src, dst) => {
  if (src === dst) return true;
  
  // See if path exists for each neighbor of the source node
  for (let neighbor of graph[src]) {
    if(hasPath(graph, neighbor, dst)) return true;
  }
  
  return false;
};

// Time complexity: O(e) // edges to traverse
// Space complexity: O(n) // stack or queue size growth
const hasPath2BFS = (graph, src, dst) => {
    const queue = [src];
    while(queue.length) {
        const node = queue.shift();
        for(let neighbor of graph[node]) {
            if (neighbor === dst) return true;
            queue.push(neighbor);
        }
    }
    return false
};

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true