// Write a function, rareRouting, that takes in a number of cities (n) and a two dimensional array where each subarray represents a direct road that connects a pair of cities. The function should return a boolean indicating whether or not there exists a unique route for every pair of cities. A route is a sequence of roads that does not visit a city more than once.
// Cities will be numbered 0 to n - 1.
// You can assume that all roads are two-way roads. This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A.

// For example, given these roads:
// 0 --- 1
// | \
// |  \
// |   \
// 2    3

// There is a unique route for between every pair of cities.
// So the answer is true.

// For example, given these roads:

// 0 --- 1
// | \
// |  \
// |   \
// 2 -- 3

// There are two routes that can be used to travel from city 1 to city 2:
// - first route:  1, 0, 2
// - second route: 1, 0, 3, 2 
// The answer is false, because routes should be unique.

// Approach:
// Use DFS to explore the roads and track visited
// If a visited city is visited again, return false
// If there are cities that can't be visited from another city, return false
// Keep track of the previous city so it isn't visited again

// Time complexity: O(n^2) quadratic
// Space complexity: O(n) linear
const rareRouting = (n, roads) => {
  const visiting = new Set();
  const graph = convertToGraph(roads);
  const uniqueRoads = exploreRoads(graph, 0, visiting);
  return uniqueRoads && visiting.size === n;
};

const exploreRoads = (graph, city, visiting, prev = null) => {
  if (visiting.has(city)) return false;
  visiting.add(city);

  for (let neighbor of graph[city]) {
    if (neighbor === prev) continue;
    if (!exploreRoads(graph, neighbor, visiting, city)) return false;
  }

  return true;
};

const convertToGraph = (edges) => {
  const graph = {};
  
  for (let edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  
  return graph;
};

// rareRouting(4, [
//   [0, 1],
//   [0, 2],
//   [0, 3]
// ]); // -> true

// rareRouting(4, [
//   [0, 1],
//   [0, 2],
//   [0, 3],
//   [3, 2]
// ]); // -> false

// rareRouting(6, [
//   [1, 2],
//   [5, 4],
//   [3, 0],
//   [0, 1],
//   [0, 4],
// ]); // -> true

// rareRouting(6, [
//   [1, 2],
//   [4, 1],
//   [5, 4],
//   [3, 0],
//   [0, 1],
//   [0, 4],
// ]); // -> false

// rareRouting(4, [
//   [0, 1],
//   [3, 2],
// ]); // -> false

// rareRouting(4, [
//   [0, 1],
//   [0, 2],
//   [1, 2]
// ]); // -> false

