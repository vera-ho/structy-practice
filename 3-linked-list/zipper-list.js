// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.
// Do this in-place, by mutating the original Nodes.
// You may assume that both input lists are non-empty.

// Approach:
// Use two pointers to track the head of each list and a pointer to track tail of output list
// Use a counter to determine which list to take a node from (even/odd)
// Alternate between each list until one current node is null and take the other list's rest of the nodes 

// Time complexity: linear O(min(n, m)) whichever list is shorter
// Space complexity: constant O(1)
const zipperLists = (head1, head2) => {
  let current1 = head1.next;
  let current2 = head2;
  let tail = head1;
  let counter = 0; // list 1 when even & list 2 when odd
  
  // iterate until one list has ended
  while (current1 && current2) {
    // get node from list 2
    if (counter % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
    // get node from list 1
      tail.next = current1;
      current1 = current1.next;
    }
    
    // update tail to the last node and increment counter
    tail = tail.next;
    counter++;
  }
  
  // determine which one still has nodes left and attach to the end of the output list
  tail.next = current1 ? current1 : current2;
  
  return head1 ;
};


// Time complexity: linear O(min(n, m))
// Space complexity: linear O(min(n, m)) call stack
const zipperListsRec = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;
  
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListsRec(next1, next2);
  return head1;
};

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// a.next = b;
// b.next = c;
// a -> b -> c

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// x -> y -> z

// zipperLists(a, x);
// a -> x -> b -> y -> c -> z

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// a -> b -> c -> d -> e -> f

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// x -> y -> z

// zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

/*****************************************************************************/
// const s = new Node("s");
// const t = new Node("t");
// s.next = t;
// s -> t

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// one.next = two;
// two.next = three;
// three.next = four;
// 1 -> 2 -> 3 -> 4

// zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4

/*****************************************************************************/
// const w = new Node("w");

// w

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;
// 1 -> 2 -> 3 

// zipperLists(w, one);
// w -> 1 -> 2 -> 3

/*****************************************************************************/
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;
// 1 -> 2 -> 3 

// const w = new Node("w");
// w

// zipperLists(one, w);
// 1 -> w -> 2 -> 3
