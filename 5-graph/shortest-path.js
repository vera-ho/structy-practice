// Time complexity: O(e)
// Space complexity: O(n)
const shortestPath = (edges, nodeA, nodeB) => {
    let graph = convertToGraph(edges);
    let visited = new Set();
    
    let edgeCount = findPath(graph, nodeA, nodeB, visited);
    return edgeCount;  
};
  
const findPath = (graph, src, target, visited) => {
    let queue = [ [src, 0] ];
    
    while(queue.length) {
        let [ current, distance ] = queue.shift();
        
        if(visited.has(String(current))) continue;
        else visited.add(String(current));
        
        if(current === target) return distance;
        for(let node of graph[current]){
            queue.push([node, distance + 1]);
        }
    }
    
    return -1;
}
  
const convertToGraph = (edges) => {
    let graph = {};
    for(let connections of edges) {
        const [ a, b ] = connections;
        
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a)
    }
  
    return graph;
}

// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

// Approach: 
// Track visited nodes with a set and use queue to track distance from source node
// BFS would give shortest path when the node is seen for the first time

// Time complexity: linear O(e)
// Space complexity: linear O(n)
const shortestPath2 = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  return traversePath(graph, nodeA, nodeB, new Set());
};

const traversePath = (graph, src, dest, visited) => {
  const queue = [[src, 0]];
  
  while(queue.length) {
    const [node, distance] = queue.shift();
    if(node === dest) return distance;
    visited.add(node);
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1])
      }
    }
  }
  
  return -1;
}

// Convert edges to undirected graph's adjacency list
const edgesToGraph = edges => {
  const graph = {};
  
  for (const edge of edges) {
    const [nodeA, nodeB] = edge;
    if (!graph[nodeA]) graph[nodeA] = [];
    if (!graph[nodeB]) graph[nodeB] = [];
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }
  
  return graph;
}