// Time complexity: O(n!) factorial - worst complexity!
// Space complexity: O(n!) factorial
const permutations = (items) => {
    if(!items.length) return [[]];
    
    let first = items[0];
    let subPerm = permutations(items.slice(1));
    
    let withFirst = [];
    for(let i = 0; i < subPerm.length; i++) {
        for(let j = 0; j <= subPerm[i].length; j++) {
            withFirst.push([...subPerm[i].slice(0, j) , first , ...subPerm[i].slice(j)]);
        }
    }
    
    return withFirst;
};
  