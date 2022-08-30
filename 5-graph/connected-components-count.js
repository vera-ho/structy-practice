// Time complexity: O(e) linear
// Space complexity: O(n) linear
// DFS solution
const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;
    
    for(let node in graph) {
        console.log(visited)
        let traversed = traverseNode(graph, node, visited);
        if(traversed) count += 1;
    }

    return count;
};
  
const traverseNode = (graph, node, visited) => {
    if(visited.has(String(node))) return false;
    visited.add(String(node));

    for(let neighbor of graph[node]) {
        traverseNode(graph, neighbor, visited);
    }
    return true;
}