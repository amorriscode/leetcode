/**
 * @param {number[]} nums
 * @return {number}
 */
const divideAndConquer = (nums, left, right) => {
  if (!nums.length || right < left) {
    return [0, 0, 0, 0];
  }

  if (left === right) {
    return [nums[left], nums[left], nums[left], nums[left]];
  }
  const mid = Math.floor(left + (right - left) / 2);
  
  const [leftL, leftM, leftR, leftS] = divideAndConquer(nums, left, mid);
  const [rightL, rightM, rightR, rightS] = divideAndConquer(nums, mid + 1, right);

  const l = Math.max(leftL, leftS + rightL);
  const m = Math.max(leftR + rightL, Math.max(leftM, rightM));
  const r = Math.max(rightR, leftR + rightS);
  const s = leftS + rightS;

  return [l, m, r, s];
}

const maxSubArray = nums => {
  return divideAndConquer(nums, 0, nums.length - 1)[1];
};

const example1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(example1 === 6);