/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const numCounter = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numCounter.has(nums[i])) {
      numCounter.set(nums[i], numCounter.get(nums[i]) + 1);
    } else {
      numCounter.set(nums[i], 1);
    }
  }

  for (let [key, value] of numCounter) {
    if (value === 1) {
      return key;
    }
  }
};