// Time complexity: O(2^n) exponential
// Space complexity: O(2^n) exponential
const subsets = (elements) => {
    if(!elements.length) return [[]];
    const first = elements[0];
    const withoutFirst = subsets(elements.slice(1));
    const subsetsWithFirst = withoutFirst.map( subset => [first, ...subset] );
    return [...subsetsWithFirst, ...withoutFirst];
};