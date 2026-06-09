// Single pass left-to-right greedy scan solution to convert Roman numeral to integer

import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int romanToInt(String s) {
        // Map to store the integer values of Roman numerals
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);
        
        int total = 0;
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            int currentValue = romanMap.get(s.charAt(i));
            
            // Look ahead: If there is a next character and its value is greater 
            // than the current value, apply the subtraction rule.
            if (i < n - 1 && currentValue < romanMap.get(s.charAt(i + 1))) {
                total -= currentValue;
            } else {
                // Otherwise, standard addition rule
                total += currentValue;
            }
        }
        
        return total;
    }
}

// Logic Explanation

// The core trick to parsing Roman numerals efficiently relies on a mathematical property: whenever a smaller numeral appears before a larger numeral, it signifies subtraction.

// 1. Pre-mapping ValuesWe use a HashMap to allow $O(1)$ constant time lookups for what each Roman character represents (e.g., 'M' $\rightarrow 1000$).

// 2. The Look-Ahead CheckWe iterate through the string character by character. For each character at index i, we sneak a peek at index i + 1:
// - Case A: Subtraction (currentValue < nextValue)Take MCMXCIV (1994) as an example. When i is at the first 'C' (100) and looks ahead to 'M' (1000), it notices $100 < 1000$. Instead of adding 100, we subtract it from the total. In the next loop iteration, i moves to 'M', sees it's larger than 'X', and adds 1000. Effectively, $-100 + 1000 = 900$, which correctly resolves the CM block.
// - Case B: Addition (currentValue >= nextValue or last character)If the current symbol is equal to or larger than the next one (e.g., VI $\rightarrow 5 \ge 1$), we safely add it to the running sum. The final character of any string will always default to this case because there is no "next" character to trigger a subtraction.