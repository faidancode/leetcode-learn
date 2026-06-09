// Reversing only half of the number to check for palindrome

public class Solution {
    public boolean isPalindrome(int x) {
        // Edge Case 1: Negative numbers are not palindromes (e.g., -121 becomes 121-)
        // Edge Case 2: If the last digit is 0, the first digit must also be 0 for it to be a palindrome.
        // Only the number 0 itself satisfies this condition.
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int revertedNumber = 0;
        
        // Loop until we reach the middle of the number.
        // When 'x' becomes less than or equal to 'revertedNumber', 
        // it means we have processed half of the digits.
        while (x > revertedNumber) {
            int pop = x % 10;          // Extract the last digit
            revertedNumber = (revertedNumber * 10) + pop; // Push it to the reverted number
            x /= 10;                   // Remove the last digit from x
        }

        // For even-length numbers (e.g., 1221): x will be 12, revertedNumber will be 12.
        // For odd-length numbers (e.g., 12321): x will be 12, revertedNumber will be 123.
        // We can safely get rid of the middle digit by doing revertedNumber / 10.
        return x == revertedNumber || x == revertedNumber / 10;
    }
}

// Logic Explanation

// To determine if a number is a palindrome without using extra string space, we process the digits from right to left and build a new number. However, to avoid integer overflow issues, we only reverse half of the number.

// 1. Filtering Edge Cases
// Negative Numbers: Any negative number (like -121) cannot be a palindrome because the minus sign reads at the start but would be at the end if reversed.

// Trailing Zeros: Any number ending in 0 (like 10, 290) cannot be a palindrome because no standard integer starts with a 0, except for 0 itself.

// 2. Finding the Middle Point
// We strip the last digit of x using x % 10 and append it to revertedNumber. Then, we divide x by 10.

// How do we know we've hit the middle? Since we are moving digits from x to revertedNumber, once x <= revertedNumber, we have officially reached or passed the halfway mark.

// 3. The Final Comparison
// Even Number of Digits (e.g., 1221): At the end of the loop, x = 12 and revertedNumber = 12. They match exactly.

// Odd Number of Digits (e.g., 12321): At the end of the loop, x = 12 and revertedNumber = 123. The middle digit (3) doesn't affect palindrome status, so we truncate it using revertedNumber / 10 (which gives 12) and check if it matches x.