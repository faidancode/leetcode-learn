# Two-Pointer Approach (Fast and Slow Pointer)

from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # Pointer to track the position of elements not equal to val
        k = 0
        
        # Iterate through the array using the fast pointer 'i'
        for i in range(len(nums)):
            # If the current element is not the value we want to remove
            if nums[i] != val:
                # Move it to the front at index 'k'
                nums[k] = nums[i]
                # Move the 'k' pointer forward
                k += 1
                
        # k represents the count of elements remaining
        return k