// Implement the enqueue and dequeue methods for the existing class. The enqueue method should add a given value into the queue. The dequeue should return and remove an item from the queue following first-in, first-out order.
// Your implementation should use a linked-list and not any built in containers.

// Approach
// enqueue:
//    create a new node with given value
//    if size = 0 -> set this.head to newNode and set newNode to tail
//    if size > 0 -> set this.tail.next to newNode and set newNode to tail
//    update size
// dequeue:
//    set temp node to this.head.next
//    set this.head.next to temp.next
//    update size and return temp.val

// Time complexity: O(1) constant
// Space complexity: O(1) constant for enqueue and queue; O(n) for the total queue space
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (this.size) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            // empty queue
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue() {
        const dequeuedNode = this.head;
        this.head = dequeuedNode.next;
        this.size--;
        return dequeuedNode.val;
    }
}

// const queue = new Queue();
// queue.enqueue("a");
// queue.size; // -> 1
// queue.dequeue(); // -> a
// queue.enqueue("b");
// queue.enqueue("c");
// queue.size; // -> 2
// queue.dequeue(); // -> b
// queue.dequeue(); // -> c
// queue.size; // -> 0

// const queue = new Queue();
// queue.enqueue("a");
// queue.size; // -> 1
// queue.dequeue(); // -> a
// queue.enqueue("b");
// queue.enqueue("c");
// queue.size; // -> 2
// queue.dequeue(); // -> b
// queue.dequeue(); // -> c
// queue.size; // -> 0

// const queue = new Queue();
// for (let i = 1; i <= 150000; i += 1) {
//   queue.enqueue(i);
// }
// for (let i = 1; i <= 149999; i += 1) {
//   queue.dequeue();
// }
// queue.size; // -> 1
// queue.dequeue(); // -> 150000
