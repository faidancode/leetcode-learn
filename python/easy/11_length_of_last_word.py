# Backward Iteration (Right-to-Left Scan)

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        length = 0
        i = len(s) - 1
        
        # Step 1: Skip all trailing spaces at the end of the string
        while i >= 0 and s[i] == ' ':
            i -= 1
            
        # Step 2: Count the characters of the last word
        while i >= 0 and s[i] != ' ':
            length += 1
            i -= 1
            
        return length