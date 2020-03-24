/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

const test1 = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(test1, test1 === 49);

const test2 = maxArea([1, 1]);
console.log(test2, test2 === 1);