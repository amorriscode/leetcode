/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

const example1Arr = [3,2,2,3];
console.log(removeElement(example1Arr, 3) === 2);

const example2Arr = [0,1,2,2,3,0,4,2];
console.log(removeElement(example2Arr, 2) === 5);