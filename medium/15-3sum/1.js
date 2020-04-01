/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const sortFunction = (a, b) => a - b;

const threeSum = (nums) => {
  const positive = new Map();
  const negative = new Map();
  let zeroCounter = 0;

  // Handle duplications
  const solutions = new Set();

  // Iterate over the entire array and split it into positive/negative/zeros
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negative.set(nums[i], (negative.get(nums[i]) || 0) + 1);
    } else if (nums[i] > 0) {
      positive.set(nums[i], (positive.get(nums[i]) || 0) + 1);
    } else {
      zeroCounter++;
    }
  }

  // Iterate through unique numbers in array
  const numSet = [...new Set(nums)];
  for (let i = 0; i < numSet.length; i++) {
    let first = numSet[i];

    if (first < 0) {
      // Loop through positive numbers to offset negative first
      for (let [second, value] of positive) {
        let third = -first - second;
        if (positive.has(third)) {
          // Invalid solution; we don't have a high enough count
          // to have more than two of second or third
          if (third === second && value - 1 < 1) {
            continue;
          } else {
            solutions.add([first, second, third].sort(sortFunction).toString());
          }
          // Check if we have some zeroes, if so, a valid solution
        } else if (third === 0 && zeroCounter > 0) {
          solutions.add([first, second, 0].sort(sortFunction).toString());
        }
      }
    } else if (first > 0) {
      // Loop through negative numbers to offset positive first
      for (let [second, value] of negative) {
        let third = -first - second;
        if (negative.has(third)) {
          // Invalid solution; we don't have a high enough count
          // to have more than two of second or third
          if (third === second && value - 1 < 1) {
            continue;
          } else {
            solutions.add([first, second, third].sort(sortFunction).toString());
          }
          // Check if we have some zeroes, if so, a valid solution
        } else if (third === 0 && zeroCounter > 0) {
          solutions.add([first, second, 0].sort(sortFunction).toString());
        }
      }
      // We have enough zeroes for it to be valid
    } else if (zeroCounter >= 3) {
      solutions.add([0, 0, 0].toString());
    }
  }

  // Nasty conversion back to an array of arrays
  return [...solutions.values()].map(str => str.split(','));
};

const test1 = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(test1); // [ [ '-1', '-1', '2' ], [ '-1', '0', '1' ] ]

const test2 = threeSum([3, 0, -2, -1, 1, 2]);
console.log(test2); // [[-2,-1,3],[-2,0,2],[-1,0,1]]

const test3 = threeSum([0, 0, 0]);
console.log(test3); // [[0, 0, 0]]