// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time complexity: O(n) linear - O( min(n, m) )
// Space complexity: O(1) constant
// Iterative solution
const zipperLists = (head1, head2) => {
    let current1 = head1.next;
    let current2 = head2;
    let ptr = head1;
    let count = 0;
    
    while(current1 && current2) {
        if(count % 2 === 0) {
            ptr.next = current2;
            ptr = ptr.next;
            current2 = current2.next;
        } else {
            ptr.next = current1;
            ptr = ptr.next;
            current1 = current1.next;
        }
        count++;
    }
    
    current1 ? ptr.next = current1 : ptr.next = current2
    return head1;
};


// Time complexity: O(n) linear - O( min(n, m) )
// Space complexity: O(n) linear - O( min(n, m) )
// Recursive solution
const zipperListsRecursive = (head1, head2) => {
    if(!head1 && !head2) return null;
    if(!head1) return head2;
    if(!head2) return head1;
    
    let next1 = head1.next;
    let next2 = head2.next;
    
    head1.next = head2;
    head2.next = zipperLists(next1, next2)
    
    return head1;
};


// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.
// Do this in-place, by mutating the original Nodes.
// You may assume that both input lists are non-empty.

// Approach:
// Use two pointers to track the head of each list and a pointer to track tail of output list
// Use a counter to determine which list to take a node from (even/odd)
// Alternate between each list until one current node is null and take the other list's rest of the nodes 

// Time complexity: linear O(min(n, m)) whichever list is shorter
// Space complexity: constant O(1)
const zipperLists2 = (head1, head2) => {
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


// Time complexity: linear O(min(n, m)) whichever list is shorter
// Space complexity: linear O(min(n, m)) call stack
const zipperLists2Rec = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;
  
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};