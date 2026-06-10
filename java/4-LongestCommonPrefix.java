// Horizontal scanning

class LongestCommonPrefix {
    public String longestCommonPrefix(String[] strs) {
        // Edge case: If the input array is null or empty, return an empty string
        if (strs == null || strs.length == 0) {
            return "";
        }

        // Initialize the prefix as the entire first string
        String prefix = strs[0];

        // Compare the prefix with all other strings in the array
        for (int i = 1; i < strs.length; i++) {
            // While the current string strs[i] does not start with the prefix
            while (strs[i].indexOf(prefix) != 0) {
                // Shorten the prefix by removing its last character
                prefix = prefix.substring(0, prefix.length() - 1);

                // If the prefix becomes empty, there is no common prefix
                if (prefix.isEmpty()) {
                    return "";
                }
            }
        }

        return prefix;
    }
}

// Logic Explanation

// The horizontal scanning strategy slices through the problem by narrowing down
// the answer string-by-string.

// 1. Step-by-Step BreakdownImagine the input is ["flower", "flow", "flight"].
// - Initialization: We set prefix = "flower".
// - First Comparison (with "flow"): We check if "flow" starts with "flower"
// using strs[i].indexOf(prefix). It doesn't (returns -1), so we cut "flower"
// down to "flowe", then down to "flow". Now, "flow".indexOf("flow") == 0. The
// loop conditions are satisfied, and our updated prefix is "flow".
// - Second Comparison (with "flight"): We check if "flight" starts with "flow".
// It doesn't.
// -- "flow" shortens to "flo" $\rightarrow$ still no match.
// -- "flo" shortens to "fl" $\rightarrow$ Match found! "flight" starts with
// "fl" at index 0.
// Termination: We have exhausted the array, leaving "fl" as the final longest
// common prefix.

// 2. Early Exit GuardIf at any point during the truncation the prefix is
// chopped down to an empty string "", the loop catches it immediately via
// prefix.isEmpty() and returns "". This saves precious iterations if the first
// two words share nothing in common (e.g., ["dog", "racecar"]).