// The Iterative Logic

// Initialize: Create an empty stack and an empty result array. Set a pointer curr to the root.

// Traverse: Create a loop that runs as long as curr is not null or the stack is not empty.

// Go Left: Inside the loop, another loop pushes the current node and all its left descendants onto the stack until we hit null.

// Process: Pop the top node from the stack (this is the leftmost node available). Add its value to the result array.

// Go Right: Move curr to the right child of the popped node and repeat.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let curr = root;

  // The loop continues if we have a node to visit or nodes left in the stack
  while (curr !== null || stack.length > 0) {
    // 1. Reach the leftmost node of the current subtree
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    // 2. curr is now null, so we pop from the stack
    curr = stack.pop();

    // 3. Add the node value (this is the 'Root' in Left-Root-Right)
    result.push(curr.val);

    // 4. Now move to the right subtree
    curr = curr.right;
  }

  return result;
};
