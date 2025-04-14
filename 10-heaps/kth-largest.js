// Write a function, kthLargest, that takes in an array of numbers and a value, k. The function should return the k-th largest element of the array.

// Approach
// Use a heap - iterate though numbers array and insert each value into the heap
// When the heap size is larger than k, extractMin since we know the k + 1 smallest value cannot be the k-th largest value
// Once all the values have been added to the heap, extractMin for the k-th largest value

// Time complexity: O(nlog(k)) linearithmic
// Space complexity: O(k) linear
const kthLargest = (numbers, k) => {
    const heap = new MinHeap();

    for (let num of numbers) {
        heap.insert(num);
        if (heap.size() > k) {
            heap.extractMin();
        }
    }

    return heap.extractMin();
};

// Given
class MinHeap {
    constructor() {
        this.array = [];
    }

    size() {
        return this.array.length;
    }

    isEmpty() {
        return this.array.length === 0;
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

    siftDown(idx) {
        let currentIdx = idx;
        while (currentIdx < this.size() - 1) {
            const leftChildIdx = currentIdx * 2 + 1;
            const rightChildIdx = currentIdx * 2 + 2;

            const leftChildVal =
                this.array[leftChildIdx] === undefined
                    ? Infinity
                    : this.array[leftChildIdx];
            const rightChildVal =
                this.array[rightChildIdx] === undefined
                    ? Infinity
                    : this.array[rightChildIdx];

            const smallerChildVal =
                leftChildVal < rightChildVal ? leftChildVal : rightChildVal;
            const smallerChildIdx =
                leftChildVal < rightChildVal ? leftChildIdx : rightChildIdx;

            if (this.array[currentIdx] > smallerChildVal) {
                this.swap(currentIdx, smallerChildIdx);
                currentIdx = smallerChildIdx;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.size() === 1) {
            return this.array.pop();
        }

        const min = this.array[0];
        this.array[0] = this.array.pop();
        this.siftDown(0);
        return min;
    }
}

// kthLargest([9,2,6,6,1,5,8,7], 3); // -> 7
// kthLargest([9,2,6,6,1,5,8,7], 4); // -> 6
// kthLargest([9,2,6,6,1,5,8,7], 5); // -> 6
// kthLargest([10,1,8,5,2,4], 2); // -> 8

// numbers = [
//   4,5,85,77,47,80,37,42,3,6,62,33,69,68,16,20,83,39,14,58,75,35,72,36,19,18,66,61,41,79,28,43,7,24,40,53,32,12
// ]
// kthLargest(numbers, 9); // -> 68

// numbers = [
//   4,5,85,77,47,80,37,42,3,6,62,33,69,68,16,20,83,39,14,58,75,35,72,36,19,18,66,61,41,79,28,43,7,24,40,53,32,12
// ]
// kthLargest(numbers, 5); // -> 77
