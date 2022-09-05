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