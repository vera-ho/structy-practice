// Time complexity: O(n) linear - O( max(n, m) )
// Space complexity: O(n) linear - O( max(n, m) )
// Recursive solution
const addListsRecursive = (head1, head2, carry = 0) => {
    if(!head1 && !head2 && !carry) return null;
    
    const val1 = head1 ? head1.val : 0;
    const val2 = head2 ? head2.val : 0;
    
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    
    const next1 = head1 ? head1.next : null;
    const next2 = head2 ? head2.next : null;
    const node = new Node(digit);
    
    node.next = addLists(next1, next2, carry)
    return node;
}

// Time complexity: O(n) linear - O( max(n, m) )
// Space complexity: O(n) linear - O( max(n, m) )
// Iterative solution
const addLists = (head1, head2) => {
    let dummy = new Node(null);
    let tail = dummy;
    let current1 = head1;
    let current2 = head2;
    let carry = 0;
    
    while(current1 || current2 || carry) {
      let val1 = current1 ? current1.val : 0;
      let val2 = current2 ? current2.val : 0;
      let sum = val1 + val2 + carry;
      let digit = sum % 10;
      let node = new Node(digit);
      
      carry = sum > 9 ? 1 : 0;
      tail.next = node;
      tail = tail.next;
      
      if(current1) current1 = current1.next;
      if(current2) current2 = current2.next;
    }
    
    return dummy.next;
  };


// Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.
// You must do this by traversing through the linked lists once.

// Approach: 
// Since the LSD is first in the lists, get the value of the nodes in both lists at the same position and add the values (including any carry)
// If the sum is larger than 9, set a carry variable to 1 and set a new node to the singles digit of the sum
// If one list is longer, add carry to the value of those nodes only

// Time complexity: linear O(max(n, m)) 
// Space complexity: linear O(max(n, m)) 
const addLists2 = (head1, head2) => {
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
const addLists2Rec = (head1, head2, carry = 0) => {
  if (!head1 && !head2 && !carry) return null;
  
  const digit1 = head1 ? head1.val : 0;
  const digit2 = head2 ? head2.val : 0;
  const sum = digit1 + digit2 + carry;
  carry = sum > 9 ? 1 : 0;
  
  const newNode = new Node(sum % 10);
  newNode.next = addLists(head1?.next, head2?.next, carry);
  return newNode;
};