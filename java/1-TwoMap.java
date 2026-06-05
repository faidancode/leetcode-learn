public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Create a hash map to store the value and its corresponding index
        Map<Integer, Integer> numMap = new HashMap<>();

        // Iterate through the array
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            // Check if the complement already exists in the map
            if (numMap.containsKey(complement)) {
                // If found, return the index of the complement and the current index
                return new int[] { numMap.get(complement), i };
            }

            // If not found, put the current number and its index into the map
            numMap.put(nums[i], i);
        }

        // Return an empty array if no solution is found (though the problem guarantees
        // one exists)
        return new int[] {};
    }
}