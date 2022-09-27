// Time complexity: O(n choose k) binomial coefficient
// Space complexity: O(n choose k)
// Binomial complexity occurs when order does not matter in a subset of k chosen from n items
const createCombinations = (items, k) => {
    if(!k) return [[]];
    if(k > items.length) return [];
    
    const partial = items.slice(1);
    let takeFirst = createCombinations(partial, k - 1);
    let leaveFirst = createCombinations(partial, k);
    
    let addFirst = [];
    for(let subset of takeFirst) {
        addFirst.push([items[0], ...subset]);
    }
    
    return [...addFirst, ...leaveFirst];
};