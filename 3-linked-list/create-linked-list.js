// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative solution
const createLinkedList = (values) => {
    if(!values) return null;
    let head = current = null;
    
    for(let i = 0; i < values.length; i++) {
        let node = new Node(values[i]);
        if(i === 0) {
            head = node;
            current = head;
        } else {
            current.next = node;
            current = current.next;
        }
    }
    return head;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative solution with dummy head
const createLinkedListWithDummy = (values) => {
    let dummy = new Node(null);
    let tail = dummy;
    
    for(let val of values) {
        tail.next = new Node(val)
        tail = tail.next;
    }
    
    return dummy.next;
};

// Time complexity: O(n^2) quadratic (due to slice)
// Space complexity: O(n) linear
// Recursive solution
const createLinkedListRecursive1 = (values) => {
    if(values.length === 0) return null;
    const head = new Node(values[0])
    head.next = createLinkedList(values.slice(1))
    return head;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive solution
const createLinkedListRecursive2 = (values, index = 0) => {
    if(values.length === index) return null;
    const head = new Node(values[index])
    head.next = createLinkedList(values, index + 1)
    return head;
  };

// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.
// Approach:
// Return null if input is an empty array
// Create a null 'head' node and iterate through the array, adding a new node with the element value
// Time complexity: linear O(n)
// Space complexity: linear O(n)
const createLinkedList3 = (values) => {
  // Create dummy head node and create pointer for previous node
  const dummyhead = new Node();
  let prev = dummyhead;
  
  // Iterate through array, create new node and attach it to the end of the list
  for(let value of values) {
    const newNode = new Node(value)
    prev.next = newNode;
    prev = newNode;
  }
  
  // Return dummy head's next as new linked list
  return dummyhead.next;
};

// Approach:
// Return null if input is an empty array
// Create a head node for the first element and it's next would be calling the fn on the rest of the array
// Time complexity: linear O(n)
// Space complexity: linear O(n)
const createLinkedList3Recs = (values) => {
  if (!values.length) return null;
  const newNode = new Node(values[0]);
  newNode.next = createLinkedList(values.slice(1));
  return newNode;
};
