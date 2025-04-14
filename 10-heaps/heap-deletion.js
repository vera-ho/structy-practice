// Implement the extractMin method for the existing class. The method should return and remove the smallest value in the heap, maintaining min heap order and height balance.
// Start by watching the approach video. You'll also want to follow along with the walkthrough video. You won't know how to implement this if it is your first time dealing with heaps.

// Approach
// Save root value because we know its the smallest value in the heap
// Move the last value in the array to index 0 and start sift down
//    Calculate the indicies of children of the current index; if index is out of bounds, use Infinity
//    Compare values of the children and pick the smaller one's index
//    Swap current index and smaller value's index until current index is out of bounds

// Time complexity: O(log(n)) logarithmic
// Space complexity: O(1) constant
class MinHeap {
    // *************** Given ***************//
    constructor() {
        this.array = [];
    }

    isEmpty() {
        return this.array.length === 0;
    }

    size() {
        return this.array.length;
    }

    swap(idx1, idx2) {
        [this.array[idx1], this.array[idx2]] = [
            this.array[idx2],
            this.array[idx1],
        ];
    }

    siftUp(idx) {
        let currentIdx = idx;
        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.array[currentIdx] < this.array[parentIdx]) {
                this.swap(currentIdx, parentIdx);
                currentIdx = parentIdx;
            } else {
                break;
            }
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.size() - 1);
    }

    // *************** heap deletion solution ***************//
    siftDown() {
        let currentIdx = 0;
        while (currentIdx < this.array.length) {
            const leftIdx = 2 * currentIdx + 1 || Infinity;
            const rightIdx = 2 * currentIdx + 2 || Infinity;
            const swapIndex =
                this.array[leftIdx] > this.array[rightIdx] ? rightIdx : leftIdx;

            if (swapIndex < this.array.length) {
                this.swap(currentIdx, swapIndex);
            }
            currentIdx = swapIndex;
        }
    }

    extractMin() {
        const minValue = this.array[0];
        this.array[0] = this.array.pop();
        this.siftDown();
        return minValue;
    }
}

// ***************************************************** //
// const heap = new MinHeap();
// heap.insert(12);
// heap.insert(13);
// heap.insert(11);
// heap.insert(4);
// heap.insert(20);
// heap.insert(9);
// heap.insert(22);
// heap.insert(14);
// console.log(heap.extractMin()); // -> 4
// console.log(heap.extractMin()); // -> 9
// console.log(heap.extractMin()); // -> 11

// ***************************************************** //
// const heap = new MinHeap();
// heap.insert(12);
// heap.insert(93);
// heap.insert(63);
// heap.insert(16);
// console.log(heap.extractMin()); // -> 12
// console.log(heap.extractMin()); // -> 16
// heap.insert(-500);
// heap.insert(21);
// heap.insert(11);
// heap.insert(43);
// heap.insert(-6);
// heap.insert(35);
// heap.insert(15);
// console.log(heap.extractMin()); //-> -500
// console.log(heap.extractMin()); //-> -6
// console.log(heap.extractMin()); // -> 11
// console.log(heap.extractMin()); // -> 15
// console.log(heap.extractMin()); // -> 21
// console.log(heap.extractMin()); // -> 35
// console.log(heap.extractMin()); // -> 43
// console.log(heap.extractMin()); // -> 63
// console.log(heap.extractMin()); // -> 93
