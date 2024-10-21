// Write a function, topologicalOrder, that takes in an object representing the adjacency list for a directed-acyclic graph. The function should return an array containing the topological-order of the graph.
// The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.

// Approach
// Track the number of parents each node has
// When a node has no parents, push it to the output array
// In the adjacency list, check if that node had children and decrement the number of parents they have in the parent tracking object

// Time complexity: O(n + e) linear where n = nodes and e = edges
// Space complexity: O(n) linear
const topologicalOrder = (graph) => {
  const numParents = calcParents(graph);
  const topOrder = [];
  const readyNodes = [];

  for (let node in numParents) {
    if (numParents[node] === 0) readyNodes.push(node);
  }

  while (readyNodes.length) {
    const node = readyNodes.pop();
    topOrder.push(node);

    for (let child of graph[node]) {
      numParents[child]--;
      if (numParents[child] === 0) readyNodes.push(child);
    }
  }

  return topOrder;
};

// create object with parent counters
const calcParents = (graph) => {
  const numParents = {};

  for (let node in graph) {
    if (!numParents[node]) numParents[node] = 0;
    
    for (let child of graph[node]) {
      if (!numParents[child]) numParents[child] = 0;
      numParents[child]++;
    }
  }

  return numParents;
}

// topologicalOrder({
//   a: ["f"],
//   b: ["d"],
//   c: ["a", "f"],
//   d: ["e"],
//   e: [],
//   f: ["b", "e"],
// }); // -> ['c', 'a', 'f', 'b', 'd', 'e']

// topologicalOrder({
//   h: ["l", "m"],
//   i: ["k"],
//   j: ["k", "i"],
//   k: ["h", "m"],
//   l: ["m"],
//   m: [],
// }); // -> ['j', 'i', 'k', 'h', 'l', 'm']

// topologicalOrder({
//   q: [],
//   r: ["q"],
//   s: ["r"],
//   t: ["s"],
// }); // -> ['t', 's', 'r', 'q']


// topologicalOrder({
//   v: ["z", "w"],
//   w: [],
//   x: ["w", "v", "z"],
//   y: ["x"],
//   z: ["w"],
// }); // -> ['y', 'x', 'v', 'z', 'w']

