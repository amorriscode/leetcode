# 100. Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

## Example 1

```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

## Example 2

```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

## Example 3

```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

## Lessons

- The iterative solution didn't come naturally to me; I haven't use queues enough

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|68 ms|faster than 20.33% of JavaScript submissions|33.9 MB|less than 26.67% of JavaScript submissions|
|2|JavaScript|60 ms|faster than 30.40% of JavaScript submissions|33.8 MB|less than 80.00% of JavaScript submissions|
|3|JavaScript|68 ms|faster than 20.33% of JavaScript submissions|33.5 MB|less than 100.00% of JavaScript submissions|
