# 15. 3Sum Closest

Given an array `nums` of `n` integers and an integer `target`, find three integers in `nums` such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

## Examples

```
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

## Notes

- Solved the `O(n^3)` solution first; this would probably make me fail an interview 😂
- Two pointers in a for loop create an `O(n^2)` solution

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|220 ms|faster than 8.86% of JavaScript submissions|34.9 MB|less than 100.00% of JavaScript submissions|
|2|JavaScript|64 ms|faster than 83.96% of JavaScript submissions|35.1 MB|less than 100.00% of JavaScript submissions|
