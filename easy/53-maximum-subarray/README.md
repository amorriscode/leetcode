# 53. Maximum Subarray

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

## Example

**Input:** `[-2,1,-3,4,-1,2,1,-5,4]`
**Output:** `6`
**Explanation:** `[4,-1,2,1]` has the largest `sum = 6`

## Follow Up

If you have figured out the `O(n)` solution, try coding another solution using the divide and conquer approach, which is more subtle.


## Lessons

- Dynamic programming solution stores the sums in the original array
- The divide and conquer solution is harder to reason about

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|116 ms|faster than 14.86% of JavaScript submissions|35.1 MB|less than 83.33% of JavaScript submissions|
|2|JavaScript|80 ms|faster than 15.69% of JavaScript submissions|34.9 MB|less than 98.15% of JavaScript submissions|
|3|JavaScript|64 ms|faster than 37.60% of JavaScript submissions|38.2 MB|less than 5.55% of JavaScript submissions|