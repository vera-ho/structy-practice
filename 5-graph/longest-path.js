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


// ------------------------------------------------------------------------- //

// Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.

// Approach: 
// Use DFS to reach to each furthest path and return the path count
// Compare and keep longest path
// Check every starting node in the adjacency list
// Save paths calculated from a node so we don't have to recalculate it if we encounter it again

// Complexity: linear O(n) for space to store visited distances and linear O(e) for time
const longestPath2 = (graph) => {
  let maxDistance = 0;
  let visitedDistance = {}; // stores longest path from a previously calculated node
  
  for (let node in graph) {
    const distance = checkPath(graph, node, visitedDistance);
    if (distance > maxDistance) maxDistance = distance;
  }
  
  return maxDistance;
};

const checkPath = (graph, node, visitedDistance) => {
  if (node in visitedDistance) return visitedDistance[node];
  if (!graph[node].length) return 0;
  let maxDistance = 0;
  
  for (let neighbor of graph[node]) {
    const distance = checkPath(graph, neighbor, visitedDistance) + 1;
    if (distance > maxDistance) maxDistance = distance;
  }
  
  visitedDistance[node] = maxDistance;
  return maxDistance;
}

  // Iterative fails due to timeout for large graphs ***** not logically possible to do it iterativelly?
  //   const stack = [[node, 0]]; // [node, distance]
  //   let maxDistance = 0;

  //   while(stack.length) {
  //     let [current, distance] = stack.pop();

  //     for (let neighbor of graph[current]) {
  //       if (neighbor in visitedDistance) {
  //         visitedDistance[current] = visitedDistance[neighbor] + 1;
  //         maxDistance = visitedDistance[current];
  //       } else {
  //         stack.push([neighbor, distance + 1]);
  //       }
  //     }

  //     if (distance > maxDistance) maxDistance = distance;
  //   }

  //   // Save calculated maximum distance from this node
  //   visitedDistance[node] = maxDistance;
  //   return maxDistance;

module.exports = {
  longestPath,
};
