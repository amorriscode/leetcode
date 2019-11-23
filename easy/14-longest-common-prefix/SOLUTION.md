# Solution

## Approach 1: Horizontal scanning

### Intuition

For a start we will describe a simple way of finding the longest prefix shared by a set of strings `LCP(S1...Sn)`. We will use the observation that :

`LCP(S1..Sn) = LCP(LCP(LCP(S1, S2), S3), ...Sn)`

### Algorithm

To employ this idea, the algorithm iterates through the strings `[S1...Sn]`, finding at each iteration `i` the longest common prefix of strings `LCP(S1...Si)`. When `LCP(S1...Si)` is an empty string, the algorithm ends. Otherwise after `n` iterations, the algorithm returns `LCP(S1...Sn)`.

```java
 public String longestCommonPrefix(String[] strs) {
    if (strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    return prefix;
}
```

### Complexity Analysis

- **Time Complexity:** `O(S)`, where `S` is the sum of all characters in the string
  - In the worst case all `n` strings are the same. The algorithm compares `S1` with the other strings `[S2..Sn]`. There are `S` character comparisons, where `S` is the sum of all characters in the input array.
- **Space Complexity:** `O(1)`; constant space used

## Approach 2: Vertical scanning

Imagine a very short string is at the end of the array. The above approach will still do `S` comparisons. One way to optimize this case is to do vertical scanning. We compare characters from top to bottom on the same column (same character index of the strings) before moving on to the next column.

```java
public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    for (int i = 0; i < strs[0].length() ; i++){
        char c = strs[0].charAt(i);
        for (int j = 1; j < strs.length; j ++) {
            if (i == strs[j].length() || strs[j].charAt(i) != c)
                return strs[0].substring(0, i);
        }
    }
    return strs[0];
}
```

### Complexity Analysis

- **Time Complexity:** `O(S)`, where `S` is the sum of all characters in all strings.
  - In the worst case there will be `n` equal strings with length `m` and the algorithm performs `S = m * n` character comparisons.
  - Even though the worst case is still the same as Approach 1, in the best case there are at most `n * minLen` comparisons where `minLen` is the length of the shortest string in the array.
- **Space Complexity:** `O(1)`; we only used constant extra space.
