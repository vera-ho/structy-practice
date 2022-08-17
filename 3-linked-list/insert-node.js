// Time complexity: O(n) linear
// Space complexity: O(1) constant
// Iterative solution
const insertNode = (head, value, index) => {
    let count = 0;
    let current = head;
    let newNode = new Node(value)
    
    if(index === 0) {
        newNode.next = head;
        return newNode;
    }
    
    while(current) {
        if(count === index - 1) {
            newNode.next = current.next;
            current.next = newNode;
        }
        count++;
        current = current.next;
    }
    return head;
};


// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive solution
const insertNodeRecursive = (head, value, index, count = 0) => {
    if(!head) return null;
    
    if(index === 0) {
        let node = new Node(value);
        node.next = head;
        return node;
    }
    
    if(count === index - 1){
        let node = new Node(value);
        node.next = head.next;
        head.next = node;
        return head; 
    }
    
    head.next = insertNode(head.next, value, index, count + 1);
    return head;
  };