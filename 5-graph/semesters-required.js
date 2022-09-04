// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Prereqs are like edges -> can convert to graph
// Number of semesters = longest path
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