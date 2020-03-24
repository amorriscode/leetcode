# Solution

## Approach 1: Brute Force

### Algorithm 

In this case, we will simply consider the area for every possible pair of the lines and find out the maximum area out of those (See [`1.js`](https://github.com/amorriscode/leetcode/blob/master/medium/11-container-with-most-water/1.js)). 

### Complexity Analysis

- **Time Complexity:** `O(n^2)`
  - Calculating area for all `n(n-1) / 2` height pairs
- **Space Complexity:** `O(1)`
  - Constant extra space is used

## Approach 2: Two Pointer Approach

### Algorithm

The intuition behind this approach is that the area formed between the lines will always be limited by the height of the shorter line. Further, the farther the lines, the more will be the area obtained.

We take two pointers, one at the beginning and one at the end of the array constituting the length of the lines. Futher, we maintain a variable `maxarea` to store the maximum area obtained till now. At every step, we find out the area formed between them, update `maxarea` and move the pointer pointing to the shorter line towards the other end by one step.

### How it works

Initially we consider the area constituting the exterior most lines. Now, to maximize the area, we need to consider the area between the lines of larger lengths. If we try to move the pointer at the longer line inwards, we won't gain any increase in area, since it is limited by the shorter line. But moving the shorter line's pointer could turn out to be beneficial, as per the same argument, despite the reduction in the width. This is done since a relatively longer line obtained by moving the shorter line's pointer might overcome the reduction in area caused by the width reduction.

### Complexity Analysis

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`