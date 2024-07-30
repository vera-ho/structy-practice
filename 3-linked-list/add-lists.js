
// Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.
// You must do this by traversing through the linked lists once.

// Say we wanted to compute 621 + 354 normally. The sum is 975:
//    621
//  + 354
//  -----
//    975

// Then, the reversed linked list format of this problem would appear as:
//     1 -> 2 -> 6
//  +  4 -> 5 -> 3
//  --------------
//     5 -> 7 -> 9

// Approach: 
// Since the LSD is first in the lists, get the value of the nodes in both lists at the same position and add the values (including any carry)
// If the sum is larger than 9, set a carry variable to 1 and set a new node to the singles digit of the sum
// If one list is longer, add carry to the value of those nodes only

// Time complexity: linear O(max(n, m)) 
// Space complexity: linear O(max(n, m)) 
const addLists = (head1, head2) => {
  let carry = 0;
  let current1 = head1;
  let current2 = head2;
  let dummyhead = new Node();
  let tail = dummyhead;
  
  // Iterate until all nodes in both lists have been used
  while(current1 || current2) {
    // Calculate the sum, value for new node and updated carry
    const digit1 = current1?.val || 0;
    const digit2 = current2?.val || 0;
    const sum = digit1 + digit2 + carry;
    const nodeVal = sum > 9 ? sum % 10 : sum;
    carry = sum > 9 ? 1 : 0;
    
    // Add the new node to the result list
    tail.next = new Node(nodeVal);
    
    // Update pointers
    current1 = current1?.next;
    current2 = current2?.next;
    tail = tail.next;
  }
  
  // If there's a carry left over, add the final node
  tail.next = carry ? new Node(carry) : null;
  return dummyhead.next;
};

// Time complexity: linear O(max(n, m)) 
// Space complexity: linear O(max(n, m)) 
// Each recursive step returns a node for the solution
const addListsRec = (head1, head2, carry = 0) => {
  if (!head1 && !head2 && !carry) return null;
  
  const digit1 = head1 ? head1.val : 0;
  const digit2 = head2 ? head2.val : 0;
  const sum = digit1 + digit2 + carry;
  carry = sum > 9 ? 1 : 0;
  
  const newNode = new Node(sum % 10);
  newNode.next = addListsRec(head1?.next, head2?.next, carry);
  return newNode;
};

/*****************************************************************************/
//   621
// + 354
// -----
//   975

// const a1 = new Node(1);
// const a2 = new Node(2);
// const a3 = new Node(6);
// a1.next = a2;
// a2.next = a3;
// 1 -> 2 -> 6

// const b1 = new Node(4);
// const b2 = new Node(5);
// const b3 = new Node(3);
// b1.next = b2;
// b2.next = b3;
// 4 -> 5 -> 3

// addLists(a1, b1);
// 5 -> 7 -> 9

/*****************************************************************************/
//  7541
// +  32
// -----
//  7573

// const a1 = new Node(1);
// const a2 = new Node(4);
// const a3 = new Node(5);
// const a4 = new Node(7);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// 1 -> 4 -> 5 -> 7

// const b1 = new Node(2);
// const b2 = new Node(3);
// b1.next = b2;
// 2 -> 3 

// addLists(a1, b1);
// 3 -> 7 -> 5 -> 7


/*****************************************************************************/
//   39
// + 47
// ----
//   86

// const a1 = new Node(9);
// const a2 = new Node(3);
// a1.next = a2;
// 9 -> 3

// const b1 = new Node(7);
// const b2 = new Node(4);
// b1.next = b2;
// 7 -> 4

// addLists(a1, b1);
// 6 -> 8

/*****************************************************************************/
//   999
//  +  6
//  ----
//  1005

// const a1 = new Node(9);
// const a2 = new Node(9);
// const a3 = new Node(9);
// a1.next = a2;
// a2.next = a3;
// 9 -> 9 -> 9

// const b1 = new Node(6);
// 6

// addLists(a1, b1);
// 5 -> 0 -> 0 -> 1
