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
