class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Special cases:
        # As discussed above, when x < 0, x is not a palindrome.
        # Also if the last digit of the number is 0, the first digit of the number also needs to be 0.
        # Only 0 satisfies this property.
        if x < 0 or (x % 10 == 0 and x != 0):
            return False

        reverted_number = 0
        while x > reverted_number:
            # Get the last digit of x and append it to reverted_number
            reverted_number = (reverted_number * 10) + (x % 10)
            # Remove the last digit from x
            x //= 10

        # When the length is an odd number, we can get rid of the middle digit by reverted_number // 10
        # For example, when x = 121, at the end of the while loop we get x = 1, reverted_number = 12
        # Since the middle digit doesn't matter in palindrome, we can safely remove it.
        return x == reverted_number or x == reverted_number // 10
    
# Algorithm Used: Reversing Half of the Number

# Edge Cases
# - All negative numbers are definitely not palindromes due to the leading minus sign (e.g., -121).
# - If the number ends with 0, it can only be a palindrome if the number itself is 0 (e.g., 10 or 200 are not palindromes).

# Reversing Process
# 1. Initialize a variable reverted_number = 0.

# 2. Loop as long as x > reverted_number. Inside the loop:
# -- Extract the last digit of x using the modulo operator (x % 10) and append it to reverted_number.
# -- Truncate the last digit from x using integer division (x // 10).    