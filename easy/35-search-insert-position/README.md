# 35. Search Insert Position

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

## Example 1

**Input:** `[1,3,5,6]`, `5`
**Output:** `2`

## Example 2

**Input:** `[1,3,5,6]`, `2`
**Output:** `1`

## Example 3

**Input:** `[1,3,5,6]`, `7`
**Output:** `4`

## Example 4

**Input:** `[1,3,5,6]`, `0`
**Output:** `0`

## Lessons

- Brute force it first
- [Great complexity analysis of binary search](https://stackoverflow.com/a/8185382/10024329)

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|44 ms|faster than 98.41% of JavaScript submissions|34.7 MB|less than 31.25% of JavaScript submissions|
|2|JavaScript|56 ms|faster than 54.89% of JavaScript submissions|33.8 MB|less than 81.25% of JavaScript submissions|