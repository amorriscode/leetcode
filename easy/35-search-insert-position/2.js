/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (arr, target, min, max) => {
  if (max < min) {
    return arr.length;
  }

  const guess = min + Math.floor((max - min) / 2);

  if (arr[guess] === target) {
    return guess;
  } else if (arr[guess] < target && arr[guess + 1] > target) {
    return guess + 1;
  } else if (arr[guess] < target) {
    return binarySearch(arr, target, guess + 1, max);
  } else {
    return binarySearch(arr, target, min, guess - 1);
  }
}

const searchInsert = (nums, target) => {
  if (nums[0] >= target) {
    return 0;
  }

  return binarySearch(nums, target, 0, nums.length - 1);
};

const example1 = searchInsert([1,3,5,6], 5);
console.log(example1 === 2, example1);

const example2 = searchInsert([1,3,5,6], 2);
console.log(example2 === 1, example2);

const example3 = searchInsert([1,3,5,6], 7);
console.log(example3 === 4, example3);

const example4 = searchInsert([1,3,5,6], 0);
console.log(example4 === 0, example4);