# 7. Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

## Example 1

**Input:** 123
**Output:** 321

## Example 2

**Input:** -123
**Output:** -321

## Example 3

**Input:** 120
**Output:** 21

## Note

Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## Lessons

- Watch out for the _upper bounds_ of a 32-bit number (it's 2^31 - 1)
- String manipulation is fairly expensive; see solution 3 for a mathy way (although the numbers don't seem _that much better_)

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|100 ms|faster than 25.34% of JavaScript submissions|36 MB|less than 28.80% of JavaScript submissions|
|2|JavaScript|68 ms|faster than 99.46% of JavaScript submissions|35.9 MB|less than 49.28% of JavaScript submissions|
|3|JavaScript|64 ms|faster than 99.82% of JavaScript submissions|35.6 MB|less than 56.79% of JavaScript submissions|
