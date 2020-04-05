/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let maxSum = nums[0];
  let sum = nums[0];
  let i = 1;

  while (i < nums.length) {
    sum = Math.max(sum += nums[i], nums[i]);
    maxSum = Math.max(sum, maxSum);
    i++;
  }
  
  return maxSum;
};

const example1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(example1 === 6);