/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    }
  }

  return max;
};

const test1 = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(test1, test1 === 49);

const test2 = maxArea([1, 1]);
console.log(test2, test2 === 1);