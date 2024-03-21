class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
  
const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);

q.next = r;
r.next = s;
s.next = t;
  
// Time complexity: O(n) linear - O( min(n, m) )
// Space complexity: O(1) constant
// Iterative solution
const mergeLists = (head1, head2) => {
    let head = new Node();
    let ptr = head;
    let curr1 = head1;
    let curr2 = head2;

    while(curr1 && curr2) {
        if(curr1.val > curr2.val) {
            ptr.next = curr2;
            ptr = curr2;
            curr2 = curr2.next;
        } else {
            ptr.next = curr1;
            ptr = curr1;
            curr1 = curr1.next;
        }
    }

    curr1 ? ptr.next = curr1 : ptr.next = curr2
    return head.next;
};

// Time complexity: O(n) linear - O( min(n, m) )
// Space complexity: O(n) linear - O( min(n, m) )
// Recursive solution
const mergeListsRecursive = (head1, head2) => {
    if(!head1 && !head2) return null;
    if(!head1) return head2;
    if(!head2) return head1;
    
    if(head1.val > head2.val) {
      let next2 = head2.next;
      head2.next = mergeLists(head1, next2);
      return head2;
    } else {
      let next1 = head1.next;
      head1.next = mergeLists(next1, head2);
      return head1;
    } 
  };

mergeLists(a, q)

// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.
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
const mergeLists2 = (head1, head2) => {
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
const mergeLists2Rec = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;
  
  const head = head1.val > head2.val ? head2 : head1;
  const next1 = head1.val > head2.val ? head1 : head1.next;
  const next2 = head1.val > head2.val ? head2.next : head2;
  head.next = mergeLists(next1, next2);

  return head;
};