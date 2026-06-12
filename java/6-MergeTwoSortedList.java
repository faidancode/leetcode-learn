/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class MergeTwoSortedList {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Create a dummy node to act as the start of the merged list
        ListNode dummy = new ListNode(-1);
        // 'current' will track the tail end of our new merged list
        ListNode current = dummy;
        
        // Loop while both lists still have nodes to compare
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                current.next = list1; // Append list1's node
                list1 = list1.next;   // Move list1 pointer forward
            } else {
                current.next = list2; // Append list2's node
                list2 = list2.next;   // Move list2 pointer forward
            }
            current = current.next;   // Advance the merged list tracker
        }
        
        // If one list runs out of nodes, wire up the remainder of the other list
        if (list1 != null) {
            current.next = list1;
        } else {
            current.next = list2;
        }
        
        // The actual head of the sorted merged list is right after the dummy node
        return dummy.next;
    }
}
