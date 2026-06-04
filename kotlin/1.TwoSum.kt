class Solution {
    fun twoSum(nums: IntArray, target: Int) : IntArray {
        // Create a HashMap to store the value as the key and its index as the value
        val map = HashMap<Int, Int>()
        
        // Iterate through the array using both the index and the value
        for ((index, num) in nums.withIndex()) {
            // Calculate the complement needed to reach the target
            val complement = target - num
            
            // If the complement is already in our map, we found our pair!
            if (map.containsKey(complement)) {
                // Return the index of the complement and the current index
                return intArrayOf(map[complement]!!, index)
            }
            
            // If not found, store the current number and its index in the map
            map[num] = index
        }
        
        // Return an empty array if no solution is found (though the problem guarantees one)
        return intArrayOf()
    }
}