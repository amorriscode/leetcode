/**
 * @param {number[]} nums
 * @return {number}
 */

const sum = (num1, num2) => num1 + num2;

const singleNumber = (nums) => {
  const numSet = new Set(nums);
  return 2 * [...numSet].reduce(sum, 0) - nums.reduce(sum, 0);
};