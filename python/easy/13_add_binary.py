# Two-Pointer Bitwise Addition (Schoolbook Addition)

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        result = []
        carry = 0
        
        i = len(a) - 1
        j = len(b) - 1
        
        # Loop as long as there are characters left to process or a carry remains
        while i >= 0 or j >= 0 or carry:
            total = carry
            
            if i >= 0:
                total += int(a[i])
                i -= 1
                
            if j >= 0:
                total += int(b[j])
                j -= 1
                
            # Append the current bit (0 or 1)
            result.append(str(total % 2))
            
            # Update the carry (1 if total >= 2, else 0)
            carry = total // 2
            
        # Reverse the result list since we added bits from right to left
        return "".join(reversed(result))
    
# Step-by-Step Execution

# 1. Initialize an empty list result = [] to store the resulting bits and carry = 0.
# 2.Initialize two pointers, i = len(a) - 1 and j = len(b) - 1, pointing to the rightmost characters of both strings.
# 3.Run a while loop that continues as long as i >= 0, j >= 0, or carry > 0:
# -- Start each iteration with total = carry.
# -- If i >= 0, add the bit value of a[i] to total and move the pointer i leftward (i -= 1).
# -- If j >= 0, add the bit value of b[j] to total and move the pointer j leftward (j -= 1).
# -- Compute the new bit to append: total % 2 (which will be 0 or 1). Append this to our result list.
# -- Compute the new carry: total // 2 (which carries 1 over if total was 2 or 3).

# 4. Because we process the bits from right to left, our result list is backwards. Reverse the list and join it into a final string.