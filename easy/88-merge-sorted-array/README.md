# 83. Remove Duplicates from Sorted List

Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array.

**Note:**

- The number of elements initialized in `nums1` and `nums2` are `m` and `n` respectively.
- You may assume that `nums1` has enough space (size that is greater or equal to `m + n`) to hold additional elements from `nums2`.

## Example

**Input:**
`nums1 = [1,2,3,0,0,0]`, `m = 3`
`nums2 = [2,5,6]`, `n = 3`

**Output:** `[1,2,2,3,5,6]`

## Lessons

- I didn't think to go from the back of the array which makes sense 

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|68 ms|faster than 20.18% of JavaScript submissions|33.9 MB|less than 53.85% of JavaScript submissions|
