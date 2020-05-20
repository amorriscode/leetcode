# 67. Add Binary

You are climbing a stair case. It takes `n` steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Note:** Given `n` will be a positive integer.

## Example 1

**Input:** `2`
**Output:** `2`
**Explanation:** There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

## Example 2

**Input:** `3`
**Output:** `3`
**Explanation:** There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

## Lessons

- When we recurse too much we will want to use memoization which allows us to avoid recalculating results we have already calculated
- The best solutions for this are very mathy; is it worth spending time learning them?

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|52 ms|faster than 70.89% of JavaScript submissions|33.8 MB|less than 88.00% of JavaScript submissions|
|2|JavaScript|48 ms|faster than 88.33% of JavaScript submissions|33.8 MB|less than 88.00% of JavaScript submissions|
|3|JavaScript|48 ms|faster than 88.33% of JavaScript submissions|33.7 MB|less than 92.00% of JavaScript submissions|