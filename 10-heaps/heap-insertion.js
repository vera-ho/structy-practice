// Implement the insert method for the existing class. The method should properly add a given value into the heap, maintaining min heap order and height balance.
// Start by watching the approach video. You'll also want to follow along with the walkthrough video. You won't know how to implement this if it is your first time dealing with heaps.

// Approach
// Use an array to represent a heap and calculate indicies using:
//   i = parent index => left child = 2i + 1 | right child = 2i + 2
//   i = child index => parent = floor((i - 1)/ 2)
// When inserting
//   push new value to the array, track it's index and calculate parent index
//   if parent value > node value; swap them and update new value's index
//   continue until parent value >= node value

// Time complexity: O(log(n)) logarithmic
// Space complexity: O(1) insertion and O(n) heap storage
class MinHeap {
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
        let valIdx = idx;
        while (valIdx > 0) {
            let parentIdx = Math.floor((valIdx - 1) / 2);
            let parentVal = this.array[parentIdx];

            if (parentVal > this.array[valIdx]) {
                this.swap(valIdx, parentIdx);
                valIdx = parentIdx;
            } else {
                break;
            }
        }
    }

    insert(val) {
        if (this.isEmpty()) {
            this.array.push(val);
        } else {
            this.array.push(val);
            this.siftUp(this.size() - 1);
        }
    }
}

// *************************************************** //
// const heap = new MinHeap();
// heap.insert(12);
// heap.insert(13);
// heap.insert(11);
// heap.insert(4);
// heap.insert(20);
// heap.insert(9);
// heap.insert(22);
// heap.insert(14);
// console.log(heap)

//
//               4
//            /    \
//          11      9
//         / \    /  \
//       13  20  12  22
//      /
//    14
//
//
// [ 4, 11, 9, 13, 20, 12, 22, 14 ]

// *************************************************** //
// const heap = new MinHeap();
// heap.insert(12);
// heap.insert(93);
// heap.insert(63);
// heap.insert(16);
// heap.insert(-500);
// heap.insert(21);
// heap.insert(11);
// heap.insert(43);
// heap.insert(-6);
// heap.insert(35);
// heap.insert(15);
// heap.insert(37);
// heap.insert(29);
// heap.insert(-501);
// heap.insert(80);
// console.log(heap);

//                              -501
//                      /                \
//                    -6                -500
//                 /     \            /       \
//               12      15          29        11
//             /  \     /  \       /  \       /  \
//            93  43   35  16    63   37     21  80
//
//
// [ -501, -6, -500, 12, 15, 29, 11, 93, 43, 35, 16, 63, 37, 21, 80 ]
