# Two-Pointer Approach

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        # Start inserting from the second element, since the first is always unique
        insert_index = 1
        
        # Iterate through the array starting from the second element
        for i in range(1, len(nums)):
            # If the current element is different from the previous one, it's unique
            if nums[i] != nums[i - 1]:
                # Move the unique element to the insert_index position
                nums[insert_index] = nums[i]
                # Increment the insert_index for the next unique element
                insert_index += 1
                
        # insert_index represents the count of unique elements (k)
        return insert_index
    
# Step-by-Step Execution

# 1. Edge Case: If the array is empty, return 0. (Though constraints specify nums.length >= 1, it's a good practice).
# 2. Initialize insert_index = 1 because the first element (nums[0]) is always unique and already in its correct position.
# 3. Start iterating through the array with a fast pointer i from index 1 to the end of the array:
# - Compare the current element nums[i] with the element right before it nums[i - 1].
# - If they are different, it means we have discovered a new unique element.
# - Write this unique element to our slow pointer's location: nums[insert_index] = nums[i].
# - Move the insert_index forward by 1 (insert_index += 1).
# - If they are the same, it is a duplicate, so do nothing and let the fast pointer keep moving.
# 4. Once the loop finishes, insert_index will hold the total count of unique elements ($k$). Return insert_index.    