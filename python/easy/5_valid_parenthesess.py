# Stack

class Solution:
    def isValid(self, s: str) -> bool:
        # Map closing brackets to their corresponding opening brackets
        mapping = {")": "(", "}": "{", "]": "["}
        stack = []

        for char in s:
            # If the character is a closing bracket
            if char in mapping:
                # Pop the topmost element from the stack if it's not empty
                top_element = stack.pop() if stack else '#'
                
                # If the mapping for the closing bracket doesn't match the top element, return False
                if mapping[char] != top_element:
                    return False
            else:
                # If it's an opening bracket, push it onto the stack
                stack.append(char)
        
        # If the stack is empty, all brackets were matched correctly
        return not stack
    
# Step-by-Step Execution

# Create a dictionary (mapping) where the closing brackets are the keys and their corresponding opening brackets are the values. This makes matching lookups efficient.

# Initialize an empty list stack = [] to act as our stack.

# Iterate through each character char in the string s:

# If the character is a closing bracket (i.e., it exists in mapping):

# Pop the top element from the stack if the stack is not empty; otherwise, assign a dummy value like '#'.

# Check if the popped opening bracket matches the required opening bracket from mapping[char]. If it doesn't match, the string is invalid, so return False.

# If the character is an opening bracket:

# Push it onto the stack (stack.append(char)).

# After checking the entire string, look at the stack. If the stack is empty (not stack), it means all brackets were correctly matched and closed, so return True. If there are leftover brackets in the stack, return False.    