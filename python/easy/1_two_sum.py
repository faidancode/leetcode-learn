from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Dictionary to store the value and its corresponding index
        hash_map = {}
        
        # Iterate through the array with both index and value
        for i, num in enumerate(nums):
            complement = target - num
            
            # If the complement exists in the map, we found the solution
            if complement in hash_map:
                return [hash_map[complement], i]
            
            # Otherwise, store the current number and its index in the map
            hash_map[num] = i
            
        # Return an empty list if no solution is found (though the problem guarantees one)
        return []