/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let prev;
    let length = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== prev) {
            nums[length] = nums[i];
            length += 1;
        }

        prev = nums[i];
    }

    return length;
};

const test1 = removeDuplicates([1,1,2]);
console.log(test1, test1 === 2);