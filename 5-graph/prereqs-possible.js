// Time complexity: O(n + p) 
// Space complexity: O(n)
// Cycle detection problem
const prereqsPossible = (numCourses, prereqs) => {
    const curriculum = makeGraph(prereqs);
    const visiting = new Set();
    const visited = new Set();
    
    for(let course in curriculum) {
        let cycle = findCycle(curriculum, course, visiting, visited);
        if(cycle) return false;
    }
    
    return true;
};
  
  
const findCycle = (graph, node, visiting, visited) => {
    if(visited.has(node)) return false;
    if(visiting.has(node)) return true;
    visiting.add(node);
    
    for(let neighbor of graph[node]) {
        let cycle = findCycle(graph, neighbor, visiting, visited);
        if(cycle) return true;
    }
    
    visiting.delete(node);
    visited.add(node);
    return false;
};

const makeGraph = edges => {
    const graph = {};
  
    for(let edge of edges) {
         let [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
    }
    
    return graph;
};


// ------------------------------------------------------------------------- //

// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.

// Approach: 
// If all courses can be completed, that means the graph does NOT have a cycle
// If a cycle is detected, return false
// Use white grey black cycle detection

// tc: linear O(e)
// sc: linear O(n)
const prereqsPossible2 = (numCourses, prereqs) => {
  const graph = edgesToGraph(prereqs);
  const visiting = new Set();
  const visited = new Set();

  for (const course in graph) {
    if (!traverseCourses(graph, course, visited, visiting)) return false;
  }
  return true;
};

// returns boolean for if cycle is found
// recursive
const traverseCourses = (graph, node, visited, visiting) => {
  if (visiting.has(String(node))) return false;
  if (visited.has(String(node))) return true;
  visiting.add(String(node));

  for (const course of graph[node]) {
    if (!traverseCourses(graph, course, visited, visiting)) return false;
  }

  visiting.delete(String(node));
  visited.add(String(node));
  return true;
}

// Directed graph
const edgesToGraph = (edges) => {
  const graph = {};

  for(let edge of edges) {
    const [edgeA, edgeB] = edge;
    if (!(edgeA in graph)) graph[edgeA] = [];
    if (!(edgeB in graph)) graph[edgeB] = [];
    graph[edgeA].push(edgeB);
  }

  return graph;
}

module.exports = {
  prereqsPossible,
};
