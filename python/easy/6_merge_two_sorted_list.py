# Iterative Two-Pointer with a Dummy Node Concept

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # Create a dummy node to simplify the initialization of the merged list
        dummy = ListNode(-1)
        tail = dummy
        
        # Traverse both lists until one becomes empty
        while list1 and list2:
            if list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            # Move the tail pointer forward
            tail = tail.next
            
        # Append the remaining nodes from either list1 or list2
        tail.next = list1 if list1 is not None else list2
        
        # The head of the merged list is the node next to the dummy node
        return dummy.next
