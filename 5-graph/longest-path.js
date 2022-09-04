// Time complexity: O(e) linear
// Space complexity: O(n) linear
const longestPath = (graph) => {
    let longest = 0;
    
    for(let node in graph) {
        let length = traverseNode(graph, node);
        if(length > longest) longest = length;
    }
    
    return longest;
};

const traverseNode = (graph, node, pathLengths) => {
    if(graph[node].length === 0) return 0;
    let tempLength = 0;
    
    for(let neighbor of graph[node]) {
        let length = traverseNode(graph, neighbor);
        if(length > tempLength) tempLength = length;
    }
    
    return tempLength + 1;
}