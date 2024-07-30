// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. 
// The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.
// Do this in-place, by mutating the original Nodes.
// You may assume that both input lists are non-empty and contain increasing sorted numbers.

// Approach: 
// Values of nodes are numbers so we can easily compare values 
// Use 2 pointers to track the current node for each list
// Use a pointer to track the tail of the result
// Decide which head to return by checking which is smaller and then increment tail and currentx
// Loop until one or both node pointers are null

// Time complexity: linear O(min(n, m))
// Space complexity: constant O(1)
const mergeLists = (head1, head2) => {
  const head = head1.val > head2.val ? head2 : head1;
  let tail = head;
  let current1 = head1.val > head2.val ? head1 : head1.next; 
  let current2 = head1.val > head2.val ? head2.next : head2;
  
  while (current1 && current2) {
    if (current1.val > current2.val) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
  }
  
  tail.next = current1 ? current1 : current2;
  
  return head;
};

// Time complexity: linear O(min(n, m))
// Space complexity: linear O(min(n, m)) - call stack
const mergeListsRec = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;
  
  const head = head1.val > head2.val ? head2 : head1;
  const next1 = head1.val > head2.val ? head1 : head1.next;
  const next2 = head1.val > head2.val ? head2.next : head2;
  head.next = mergeListsRec(next1, next2);

  return head;
};

/*****************************************************************************/
// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(6);
// const r = new Node(8);
// const s = new Node(9);
// const t = new Node(25);
// q.next = r;
// r.next = s;
// s.next = t;
// 6 -> 8 -> 9 -> 25

// mergeLists(a, q);
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 


/*****************************************************************************/
// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(1);
// const r = new Node(8);
// const s = new Node(9);
// const t = new Node(10);
// q.next = r;
// r.next = s;
// s.next = t;
// 1 -> 8 -> 9 -> 10

// mergeLists(a, q);
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 



/*****************************************************************************/
// const h = new Node(30);
// 30

// const p = new Node(15);
// const q = new Node(67);
// p.next = q;
// 15 -> 67

// mergeLists(h, p);
// 15 -> 30 -> 67
