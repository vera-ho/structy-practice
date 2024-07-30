// Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

// Approach: 
// Track node value and level of depth 
// For each node, check if that level exists - if so, add value to it otherwise, create it (level's index)

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const treeLevels = (root) => {
  if (!root) return [];

  const stack = [[root, 0]]; // [[node, level]]
  const levels = [];
  
  while (stack.length) {
    const [current, level] = stack.pop();
    if (current.right) stack.push([current.right, level + 1]);
    if (current.left) stack.push([current.left, level + 1]);
    if (levels[level]) {
      levels[level].push(current.val)
    } else {
      levels[level] = [current.val];
    }
  }
  
  return levels;
};

// Recursive approach
// Track level and output array
// For each node, add itself to the proper place and then run the fn on left and right children, if any
// Time and space complexities are both linear O(n)
const treeLevelsRec = (root, level = 0, levels = []) => {
  if (!root) return [];
  
  if (levels[level]) levels[level].push(root.val)
  else levels[level] = [root.val]
//   console.log('level', level, levels)
  
  const left = treeLevelsRec(root.left, level + 1, levels);
  const right = treeLevelsRec(root.right, level + 1, levels);
  
  return levels;
};

// Log output
// level 0 [ [ 'a' ] ] 
// level 1 [ [ 'a' ], [ 'b' ] ] 
// level 2 [ [ 'a' ], [ 'b' ], [ 'd' ] ] 
// level 2 [ [ 'a' ], [ 'b' ], [ 'd', 'e' ] ] 
// level 1 [ [ 'a' ], [ 'b', 'c' ], [ 'd', 'e' ] ] 
// level 2 [ [ 'a' ], [ 'b', 'c' ], [ 'd', 'e', 'f' ] ] 

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");
// const i = new Node("i");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

// treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ]

/*****************************************************************************/
// const q = new Node("q");
// const r = new Node("r");
// const s = new Node("s");
// const t = new Node("t");
// const u = new Node("u");
// const v = new Node("v");

// q.left = r;
// q.right = s;
// r.right = t;
// t.left = u;
// u.right = v;

//      q
//    /   \
//   r     s
//    \
//     t
//    /
//   u
//  /
// v

// treeLevels(q); //->
// [
//   ['q'],
//   ['r', 's'],
//   ['t'],
//   ['u'],
//   ['v']
// ]

/*****************************************************************************/
// treeLevels(null); // -> []
