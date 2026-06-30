# Binary Search (Search Space Range)

class Solution:
    def mySqrt(self, x: int) -> int:
        # Base cases for 0 and 1
        if x < 2:
            return x
            
        left = 2
        right = x // 2
        
        while left <= right:
            mid = (left + right) // 2
            num = mid * mid
            
            if num == x:
                return mid
            elif num > x:
                right = mid - 1
            else:
                left = mid + 1
                
        # 'right' will be the largest integer such that right * right <= x
        return right
    
# Step-by-Step Execution

# 1. Edge Cases: If $x < 2$, the square root is $x$ itself (for $x = 0$ or $x = 1$). Return $x$ immediately.
# 2. Initialize the boundaries of our search space: left = 2 and right = x // 2. (The square root of any number $x \ge 4$ will never exceed $x // 2$).
# 3. Run a while loop as long as left <= right:
# -- Calculate the middle integer: mid = (left + right) // 2.
# -- Compute the square of the midpoint: num = mid * mid.
# -- Perfect Square Found: If num == x, then mid is the exact square root. Return mid.
# -- Search Left Half: If num > x, our guess is too high. Shift the boundary to the left by updating right = mid - 1.
# -- Search Right Half: If num < x, our guess is too low, but it could potentially be the rounded-down solution. Shift the boundary to the right by updating left = mid + 1.
# 4. If the loop completes without finding an exact match, the pointers will cross, and right will point to the largest integer whose square is less than $x$. Return right.    # 