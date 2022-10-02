class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

// ****************************************** ES5 ******************************************

// Use object for O(1) lookup
// Use linked list for O(1) insertion and deletion
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.nodes = {}
    this.DLL = new DLL();
};

LRUCache.prototype.get = function(key) {
    if(!this.nodes[key]) return -1;
    
    const node = this.nodes[key];
    this.DLL.remove(node);
    this.nodes[key] = this.DLL.add(node);
    
    return node.val;
};

LRUCache.prototype.put = function(key, value) {
    if(this.nodes[key]) this.DLL.remove(this.nodes[key]);
    
    const node = new Node(key, value);
    this.nodes[key] = this.DLL.add(node);
    if(this.DLL.length > this.capacity) {
        const old = this.DLL.head.next;
        this.DLL.remove(old);
        this.nodes[old.key] = null;
    }
};

// Doubly Linked List
var DLL = function() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.length = 0;
    
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

// Add node to end of list
DLL.prototype.add = function(node) {
    const last = this.tail.prev;
    const tail = this.tail;
    
    node.prev = last;
    node.next = tail;
    last.next = node;
    tail.prev = node;
    
    this.length += 1;
    return node;
}

// Remove node from list
DLL.prototype.remove = function(node) {
    const prev = node.prev;
    const next = node.next;
    
    prev.next = next;
    next.prev = prev;
    
    this.length -= 1;
}

// ****************************************** ES6 ******************************************
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.hash = {}; // keys that reference values; values are nodes in linked list
        this.DLL = new DoublyLinkedList();
    }
    
    get(key) {
        if(!this.hash[key]) return -1;
        this.DLL.remove(this.hash[key]);
        this.hash[key] = this.DLL.push(this.hash[key]);
        return this.hash[key].val;
    }
    
    put(key, value) {
        if(this.hash[key]) this.DLL.remove(this.hash[key]);
        
        const newNode = new Node(key, value);
        this.hash[key] = this.DLL.push(newNode);
        
        if(this.DLL.length > this.capacity) {
            const lru = this.DLL.head.next;
            delete this.hash[lru.key];      // remove from hash
            this.DLL.remove(lru);           // remove from list
        }
    }
}

// // *** Helper classes *** //

class DoublyLinkedList {
    constructor() {
        // dummy nodes - values won't ever be used
        // data nodes will go between the head and tail nodes
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        
        // connect the two nodes
        this.head.next = this.tail;
        this.tail.prev = this.head;
        
        // track length of list
        this.length = 0;
    }
    
    remove(node) {
        const prev = node.prev;
        const nxt = node.next;
        prev.next = nxt;
        nxt.prev = prev;
        
        this.length--;
    }
    
    push(node) {
        const prev = this.tail.prev;
        const nxt = this.tail;
        
        // connect prev and nxt nodes to current node
        prev.next = node;
        nxt.prev = node;
        
        // connect current node to neighbors
        node.next = nxt;
        node.prev = prev;
        
        this.length++;
        return node;
    }
}