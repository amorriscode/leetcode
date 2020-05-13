/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let closest = null;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let h = j + 1; h < nums.length; h++) {
        const threeSum = nums[i] + nums[j] + nums[h];

        if (closest === null) {
          closest = threeSum;
        } else {
          const distanceToTarget = Math.abs(target - threeSum);
          const distanceClosestToTarget = Math.abs(target - closest);

          if (distanceToTarget < distanceClosestToTarget) {
            closest = threeSum;
          }
        }
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