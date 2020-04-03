/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

const example1Arr = [3,2,2,3];
console.log(removeElement(example1Arr, 3) === 2);

const example2Arr = [0,1,2,2,3,0,4,2];
console.log(removeElement(example2Arr, 2) === 5);