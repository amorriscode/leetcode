/**
 * @param {number[]} nums
 * @return {number}
 */

const sum = (num1, num2) => num1 + num2;

const singleNumber = (nums) => {
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    a ^= nums[i];
  }

  return a;
};