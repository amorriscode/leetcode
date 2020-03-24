# 11. Container With Most Water

Given `n` non-negative integers `a1, a2, ..., an`, where each represents a point at coordinate `(i, a_i)`. `n` vertical lines are drawn such that the two endpoints of line `i` is at `(i, a_i)` and `(i, 0)`. Find two lines, which together with x-axis forms a container, such that the container contains the most water.

**Note:** You may not slant the container and `n` is at least 2.

## Example 

**Input:** `[1,8,6,2,5,4,8,3,7]`

**Output:** `49`

## Lessons

- The exclusion point was easier to calculate than I let on
- Spend as much time as possible understanding the problem
- The pointer solution is tremendously faster than the brute force solution

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|680 ms|faster than 23.55% of JavaScript submissions|35.7 MB|less than 48.48% of JavaScript submissions|
|2|JavaScript|44 ms|faster than 99.90% of JavaScript submissions|35.6 MB|less than 48.48% of JavaScript submissions|
