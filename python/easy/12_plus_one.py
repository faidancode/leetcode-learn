# Reverse Iteration (Schoolbook Addition)

from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)
        
        # Iterate from the rightmost digit to the leftmost digit
        for i in range(n - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            
            # If the digit is 9, it becomes 0 due to the carryover
            digits[i] = 0
            
        # If all digits were 9, we need an extra 1 at the front (e.g., [9,9] -> [1,0,0])
        return [1] + digits
    
# Step-by-Step Execution

# 1. Start a loop that iterates through the digits array backwards, starting from the last index (len(digits) - 1) down to 0.
# 2. For each digit:
# -- Check if the current digit is 9.
# -- If it is 9: It becomes 0 because $9 + 1 = 10$ (we carry the 1 over to the next left digit). So, set digits[i] = 0.
# -- If it is less than 9: Simply increment it by 1 (digits[i] += 1) and return digits immediately. Since there is no carryover, our work is done.
# 3. The Edge Case (All Nines): If the loop completes entirely without returning, it means all the original digits were 9 (e.g., [9, 9, 9]), which have now all been transformed into 0 (e.g., [0, 0, 0]).
# 4. In this scenario, we need to append a 1 to the very front of our array. In Python, this can be efficiently handled by creating a new array [1] + digits or inserting it at the beginning.    