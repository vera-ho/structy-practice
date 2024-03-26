// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Prereqs are like edges -> can convert to graph
// Number of semesters = longest path; return number of nodes in path
const semestersRequired = (numCourses, prereqs) => {
    const graph = convertToGraph(prereqs);
    const pathLengths = {};
    
    for(let course in graph) {
        if(graph[course].length === 0) pathLengths[course] = 0;
    }
    
    for(let course in graph) {
        traverseCourse(graph, course, pathLengths);
    }
    
    let lengths = Object.values(pathLengths);
    return lengths.length > 0 ? Math.max(...lengths) : 1;
};

const traverseCourse = (graph, node, pathLengths) => {
    if(pathLengths[node]) return pathLengths[node];
    
    let maxLength = 0;
    for(let neighbor of graph[node]) {
        let length = traverseCourse(graph, neighbor, pathLengths);
        if(length > maxLength) maxLength = length;
    }
    
    pathLengths[node] = maxLength + 1;
    return pathLengths[node];
}
  
const convertToGraph = edges => {
    let graph = {};
    
    for(let edge of edges) {
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);  // sets key = course, values = prereqs
        // graph[b].push(a);  // sets key = prereq, values = available classes to take
    }
    
    return graph;
}
  
// test_00 values
// const numCourses = 6;
// const prereqs = [
//     [1, 2],
//     [2, 4],
//     [3, 5],
//     [0, 5],
// ];
// const graph1 = {   // key is course, values are prereqs
//     '0': [], 
//     '1': [], 
//     '2': [ 1 ], 
//     '3': [], 
//     '4': [ 2 ], 
//     '5': [ 3, 0 ] 
// };
// const graph2 = {  // sets key = prereq, values = available classes to take
//     '0': [ 5 ], 
//     '1': [ 2 ], 
//     '2': [ 4 ], 
//     '3': [ 5 ], 
//     '4': [], 
//     '5': [] 
// };


// ------------------------------------------------------------------------- //

// Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.
// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.
// You can assume that it is possible to eventually complete all courses.

// Approach: 
// Prereqs are like an edge list, so convert to an adjacency list for a directed, acyclic graph (DAG)
// Classes that aren't a prereq for another class, have an emtpy neighbor array
// The shortest number of semesters is the number of nodes in the longest path
// Save already calculated path counts for nodes and reuse value if the node needs to be traversed again
// Is a sneaky DP problem

// Time complexity: 
// Space complexity:
const semestersRequired2 = (numCourses, prereqs) => {
  const graph = edgesToGraph(prereqs, numCourses);
  const visited = {};
  let semesters = 0;
  
  for (let course in graph) {
    const count = getLearned(graph, course, visited);
    if (count > semesters) semesters = count;
  }
  return semesters;
};

// Traverse the node
const getLearned = (graph, node, visited) => {
  if (visited[node]) return visited[node];
  if (!graph[node].length) return 1; // class that is not a prereq to any other class
  let maxDistance = 0;
  
  for (let neighbor of graph[node]) {
    const distance = getLearned(graph, neighbor, visited) + 1;
    if (distance > maxDistance) maxDistance = distance;
  }
  visited[node] = maxDistance;
  return maxDistance;
}

// Convert to graph
const edgesToGraph = (edges, num) => {
  const graph = {};
  
  // Initialize graph to store all courses
  for (let i = 0; i < num; i++) {
    graph[i] = [];
  }
  
  for (let edge of edges) {
    graph[edge[0]].push(edge[1]);
  }
  return graph;
}
