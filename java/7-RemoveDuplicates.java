class RemoveDuplicates {
    public int removeDuplicates(int[] nums) {
        // Edge case: An empty array has 0 unique elements
        if (nums.length == 0) {
            return 0;
        }

        // The first element is always unique, so the next unique element
        // will be written starting at index 1.
        int insertIndex = 1;

        // Scan the array starting from the second element
        for (int i = 1; i < nums.length; i++) {
            // If the current element is different from the previous one,
            // we found a new unique element.
            if (nums[i] != nums[i - 1]) {
                nums[insertIndex] = nums[i]; // Move it to the write position
                insertIndex++; // Advance the write pointer
            }
        }

        // 'insertIndex' naturally represents the count of unique elements
        return insertIndex;
    }
}

// 1. Initial State
// The first element (nums[0]) is our baseline. It is always unique by default. Therefore, our write tracker (insertIndex) starts at index 1, waiting for the next different value to show up.

// 2. Identifying UniquenessWe use a loop variable i to scan the array from left to right. To find out if nums[i] is a duplicate or a brand-new unique number, we simply look back at its immediate neighbor: nums[i - 1].
// -- If they match (nums[i] == nums[i - 1]): It's a duplicate. We do nothing and let i skip forward.
// -- If they don't match (nums[i] != nums[i - 1]): We have discovered a new unique value.

// 3. Squeezing Out DuplicatesWhen a new unique value is found, we copy it over to where insertIndex is pointing, effectively shift-compressing our unique elements toward the front of the array. Once written, we increment insertIndex by 1.By the time i finishes scanning to the end of the array, insertIndex will match the exact count ($k$) of unique elements found, and the first $k$ slots of the array will contain them in perfectly sorted order.