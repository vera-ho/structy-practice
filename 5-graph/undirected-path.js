// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const undirectedPath = (edges, nodeA, nodeB) => {
    let graph = convertToGraph(edges);
    let stack = [ nodeA ];
    let visited = []; // use set?
    
    while(stack.length) {
      let current = stack.pop();
      if(current === nodeB) return true;
    
      if(!visited.includes(current)) {
        visited.push(current)
        for(let node of graph[current]) {
          stack.push(node)
        }
      }
    }
    return false;
};
  
// Time complexity: O(e) linear
// Space complexity: O(n) linear
// Iterative BFS solution
const undirectedPathBFS = (edges, nodeA, nodeB) => {
    let graph = convertToGraph(edges);
    let queue = [ nodeA ];
    let visited = []; // use set?
    
    while(queue.length) {
        let current = queue.shift();
        if(current === nodeB) return true;
        
        if(!visited.includes(current)) {
            visited.push(current)
            for(let node of graph[current]) {
            queue.push(node)
            }
        }
    }
    
    return false;
};



const convertToGraph = edges => {
    let graph = {};

    for(let connection of edges) {
        if(graph[connection[0]]) graph[connection[0]].push(connection[1]);
        else graph[connection[0]] = [connection[1]];
        
        if(graph[connection[1]]) graph[connection[1]].push(connection[0]);
        else graph[connection[1]] = [connection[0]];
    }

    // console.log(graph)
    // { 
    //   i: [ 'j', 'k' ], 
    //   j: [ 'i' ], 
    //   k: [ 'i', 'm', 'l' ], 
    //   m: [ 'k' ], 
    //   l: [ 'k' ], 
    //   o: [ 'n' ], 
    //   n: [ 'o' ] 
    // } 

    return graph;
}