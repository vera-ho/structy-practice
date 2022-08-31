// Time complexity: O(e) linear
// Space complexity: O(n) linear
const largestComponent = (graph) => {
    const visited = new Set();
    let maxCount = 0;
    
    for(let node in graph) {
        let count = traverseNode(graph, node, visited);
        if(count > maxCount) maxCount = count
    }
    
    return maxCount;
};
  
const traverseNode = (graph, node, visited) => {
    if(visited.has(String(node))) return 0;
    visited.add(String(node))
    
    let count = 1;
    for(let neighbor of graph[node]) {
        count += traverseNode(graph, neighbor, visited);
    }
    
    return count;
}