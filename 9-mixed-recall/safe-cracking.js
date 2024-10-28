// Oh-no! You forgot the number combination that unlocks your safe. Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. Each hint is a pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y' (but not necessarily immediately before y).
// The keypad on the safe has digits 0-9. You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer.
// Write a function, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. The function should return a string representing the combination.

// Approach 
// Look at each hint pair as edges between nodes, and build a topological graph using the edges
// Use the graph to create a counter how many parents a node still has
// When a node has no parents, it is the next number in the combination - add it to the output array
// When there are no nodes left, join the output combination array

// Time complexity: O(e) linear; e -> number of edges
// Space complexity: O(e) linear
const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  const numParents = findParentsCount(graph);
  const combination = [];
  const ready = [];

  for (let node in numParents) {
    if (numParents[node] === 0) ready.push(node);
  }

  while (ready.length > 0) {
    // Put the number with no parents into the combination array
    const node = ready.pop();
    combination.push(node);

    // Look at the node's children and update their parent counts
    // Add to ready array if the parent count becomes zero
    for (let child of graph[node]) {
      numParents[child]--;
      if (numParents[child] === 0) ready.push(child);
    }
  }

  return combination.join('');
};

// Create numParents object
const findParentsCount = (graph) => {
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

// Turn edges into a topological graph
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [parent, child] = edge;
    if (!graph[parent]) graph[parent] = [];
    if (!graph[child]) graph[child] = [];
    graph[parent].push(child);
  }

  return graph;
}

// safeCracking([
//   [7, 1],
//   [1, 8],
//   [7, 8],
// ]); // -> '718'

// safeCracking([
//   [3, 1],
//   [4, 7],
//   [5, 9],
//   [4, 3],
//   [7, 3],
//   [3, 5],
//   [9, 1],
// ]); // -> '473591'

// safeCracking([
//   [2, 5],
//   [8, 6],
//   [0, 6],
//   [6, 2],
//   [0, 8],
//   [2, 3],
//   [3, 5],
//   [6, 5],
// ]); // -> '086235'

// safeCracking([
//   [0, 1],
//   [6, 0],
//   [1, 8],
// ]); // -> '6018'

// safeCracking([
//   [8, 9],
//   [4, 2],
//   [8, 2],
//   [3, 8],
//   [2, 9],
//   [4, 9],
//   [8, 4],
// ]); // -> '38429'