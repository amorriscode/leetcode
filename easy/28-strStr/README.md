# 28. Implement strStr()

Implement `strStr()`.

Return the index of the first occurrence of needle in haystack, or `-1` if needle is not part of haystack.

## Example 1

**Input:** haystack = `"hello"`, needle = `"ll"`
**Output:** 2

## Example 2

**Input:** haystack = `"aaaaa"`, needle = `"bba"`
**Output:** `-1`

## Clarification

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return `0` when needle is an empty string. This is consistent to C's `strstr()` and Java's `indexOf()`.

## Lessons

- I should take the average of 3 runs the leetcode results 😅

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|56 ms|faster than 66.89% of JavaScript submissions|36.1 MB|less than 10.72% of JavaScript submissions|
|2|JavaScript|52 ms|faster than 86.15% of JavaScript submissions|35.2 MB|less than 39.29% of JavaScript submissions|
