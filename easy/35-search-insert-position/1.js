/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  if (target < nums[0]) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }

    if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    }
  }

  return nums.length;
};

const example1 = searchInsert([1,3,5,6], 5);
console.log(example1 === 2);

const example2 = searchInsert([1,3,5,6], 2);
console.log(example2 === 1);

const example3 = searchInsert([1,3,5,6], 7);
console.log(example3 === 4);

const example4 = searchInsert([1,3,5,6], 0);
console.log(example4 === 0);