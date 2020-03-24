# 9. Palindrome Number

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

## Example 1

**Input:** 121

**Output:** true

## Example 2

**Input:** -121

**Output:** false

**Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

## Example 3

**Input:** 10

**Output:** false

**Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.

## Follow Up

Could you solve it without converting the integer to a string?

## Lessons

- Solving without converting to a string is more difficult with more edge cases
- With the optimal solution/not using strings, be careful of rounding issues
- Using just math seems to be quite a bit faster and smaller

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|204 ms|faster than 74.67% of JavaScript submissions|46 MB|less than 26.71% of JavaScript submissions|
|2|JavaScript|192 ms|faster than 84.08% of JavaScript submissions|45 MB|less than 91.44% of JavaScript submissions|
|3|JavaScript|192 ms|faster than 90.22% of JavaScript submissions|44.9 MB|less than 94.16% of JavaScript submissions|
