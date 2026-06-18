# Algorithm Used: Left-to-Right Single Pass with Subtraction Check Concept

class Solution:
    def romanToInt(self, s: str) -> int:
        # Dictionary to map Roman symbols to their integer values
        roman_map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        total = 0
        n = len(s)
        
        for i in range(n):
            # If the current value is less than the next value, subtract it
            if i < n - 1 and roman_map[s[i]] < roman_map[s[i+1]]:
                total -= roman_map[s[i]]
            # Otherwise, add it to the total
            else:
                total += roman_map[s[i]]
                
        return total
    
# Step-by-Step Execution
# 1. Create a dictionary (roman_map) to store the integer value of each individual Roman symbol.

# 2. Initialize a variable total = 0 to accumulate the final integer result.

# 3. Iterate through the string s from left to right using its index i:

# - Compare the value of the current symbol roman_map[s[i]] with the value of the next symbol roman_map[s[i+1]] (if a next symbol exists).
# - Subtraction Case: If the current value is less than the next value, subtract the current value from total.
# -Addition Case: Otherwise, add the current value to total.

# 4. Return the total after the loop finishes.    