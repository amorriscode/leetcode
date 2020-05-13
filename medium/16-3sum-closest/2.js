/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let closest = nums[0] + nums[1] + nums[nums.length - 1];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let smallIndex = i + 1;
    let bigIndex = nums.length - 1;

    while (smallIndex < bigIndex) {
      let sum = nums[i] + nums[smallIndex] + nums[bigIndex];

      if (sum > target) {
        bigIndex--;
      } else {
        smallIndex++;
      }

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
    }
  }

  return closest;
};

const tests = [
  { expect: 2, answer: threeSumClosest([-1, 2, 1, -4], 1) },
  { expect: 3, answer: threeSumClosest([0, 1, 2], 3) },
  { expect: 0, answer: threeSumClosest([0, 2, 1, -3], 1) },
  { expect: 3, answer: threeSumClosest([1, 1, -1, -1, 3], 3) },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
})