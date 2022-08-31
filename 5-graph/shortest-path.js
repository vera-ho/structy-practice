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