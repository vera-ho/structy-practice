// Write a function, combineIntervals, that takes in an array of intervals as an argument. Each interval is an array containing a pair of numbers representing a start and end time. Your function should combine overlapping intervals and return an array containing the combined intervals.

// For example:
// Given two intervals:
// [1, 4] and [3, 7]

// The intervals overlap and
// should be combined into:
// [1, 7]

// You may return the combined intervals in any order.
// You can assume that the input array contains at least one interval and all intervals are valid with start < end.

// Approach
// Sort input intervals by increasing start time
// Know an interval could be combined if the end time of an interval is larger than the start time of the next interval
// Initialize the combined intervals output with the first input interval
// Loop through the input and compare start/end times with the latest combined interval
// Track current -> the interval in the input that we are evaluating
// Track last -> the last interval we have in the output
// If 'current' start time is less than or equal to the 'last' end time, check if 'current' end time extends 'last' end time. If so, update 'last'
// If 'current' start time is greater than the 'last' end time, push the current interval into the combined array and continue looping

// Time complexity: O(nlogn + n) logarithmic sort + linear iteration
// Space complexity: O(n) linear
const combineIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const combined = [intervals[0]];

  for (let interval of intervals) {
    const last = combined.length - 1;
    const [lastStart, lastEnd] = combined[last];
    const [currentStart, currentEnd] = interval;

    if (currentStart <=lastEnd) {
      // update last interval end time; don't update if currentEnd <= lastEnd
      if (currentEnd > lastEnd) {
        combined[last] = [lastStart, currentEnd];
      }
    } else {
      // add new combined interval
      combined.push(interval)
    }
  }

  return combined;
};

// const intervals = [
//   [1, 4],
//   [12, 15],
//   [3, 7],
//   [8, 13],
// ];
// combineIntervals(intervals);
// // -> [ [1, 7], [8, 15] ]

/**********************************************************************/

// const intervals = [
//   [6, 8],
//   [2, 9],
//   [10, 12],
//   [20, 24],
// ];
// combineIntervals(intervals);
// // -> [ [2, 9], [10, 12], [20, 24] ]

/**********************************************************************/

// const intervals = [
//   [3, 7],
//   [5, 8],
//   [1, 5],
// ];
// combineIntervals(intervals);
// // -> [ [1, 8] ]

/**********************************************************************/

// const intervals = [
//   [3, 7],
//   [10, 13],
//   [5, 8],
//   [27, 31],
//   [1, 5],
//   [12, 16],
//   [20, 22],
// ];
// combineIntervals(intervals);
// // -> [ [1, 8], [10, 16], [20, 22], [27, 31] ]

/**********************************************************************/

// const intervals = [
//   [3, 7],
//   [10, 13],
//   [5, 8],
//   [27, 31],
//   [1, 5],
//   [12, 16],
//   [20, 32],
// ];
// combineIntervals(intervals);
// // -> [ [1, 8], [10, 16], [20, 32] ]

/**********************************************************************/

// const intervals = [
//   [64, 70],
//   [50, 55],
//   [62, 65],
//   [12, 50],
//   [72, 300000],
// ];
// combineIntervals(intervals);
// // -> [ [12, 55], [62, 70], [72, 300000] ]

