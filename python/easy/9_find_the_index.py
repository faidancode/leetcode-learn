# Sliding Window (Substring Slicing)

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        len_haystack = len(haystack)
        len_needle = len(needle)
        
        # If needle is longer than haystack, it can't be a substring
        if len_needle > len_haystack:
            return -1
            
        # Slide the window across the haystack
        for i in range(len_haystack - len_needle + 1):
            # Check if the substring matches the needle
            if haystack[i : i + len_needle] == needle:
                return i
                
        return -1