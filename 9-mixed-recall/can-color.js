// Time complexity: O(n^2) quadratic
// Space complexity: O(n) linear
const canColor = (graph) => {
    const colors = {};
    
    for(let node in graph) {
        if(!(node in colors) && !colorNode(graph, node, colors, false)) return false;
    }
    
    return true;
};

const colorNode = (graph, node, colors, currentColor) => {
    if(node in colors) return colors[node] === currentColor;
    colors[node] = currentColor;
    
    for(let neighbor of graph[node]) {
        if(!colorNode(graph, neighbor, colors, !currentColor)) return false;
    }
    
    return true;
}