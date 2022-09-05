const hasCycle = (graph) => {
    const visiting = new Set();
    const visited = new Set();
    
    for(let node in graph) {
        let cycle = detectCycle(graph, node, visiting, visited);
        if(cycle) return true;
    }
    
    return false;
};

const detectCycle = (graph, node, visiting, visited) => {
    if(visiting.has(node)) return true;
    if(visited.has(node)) return false;
    visiting.add(node);
    
    for(let neighbor of graph[node]) {
        let cycle = detectCycle(graph, neighbor, visiting, visited);  
        if(cycle) return true;
    }
    
    visiting.delete(node);
    visited.add(node);
    return false;
};