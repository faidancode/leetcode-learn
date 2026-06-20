# Vertical Scanning

from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        
        # Take the first string as the baseline reference
        for i, char in enumerate(strs[0]):
            # Check this character against all other strings
            for string in strs[1:]:
                # If we exceed the bounds of the current string or find a mismatch
                if i == len(string) or string[i] != char:
                    return strs[0][:i]
                    
        return strs[0]
    
# Step-by-Step Execution
# Edge Case: If the input list strs is empty, return an empty string "" immediately.

# Take the first string strs[0] as the reference string.

# Iterate through each character of the reference string using its index i and character char.

# For every character, loop through the rest of the strings in the list (from index 1 to the end):

# Check if the current index i is equal to the length of the string (meaning we ran out of characters in this string), OR if the character at string[i] does not match char.

# If either condition is true, we have found the end of the common prefix. Return the substring from the reference string from the beginning up to index i (strs[0][:i]).

# If the loops finish without any mismatch, it means the entire reference string (or the shortest string in the list) is the common prefix. Return the baseline string.    