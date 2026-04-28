// To clone a connected undirected graph, we must perform a Deep Copy.

// The Logic
// 1. Map for Tracking: Use a Map (or Hash Table) where the Key is the original node and the Value is the newly created clone.

// 2. BFS Strategy: * Start with the given node. Create its clone and put it in the map.

// - Use a Queue to explore the graph level by level.

// - For each neighbor of the current node:

// -- If it hasn't been cloned yet (not in the map), clone it and add it to the map and the queue.

// -- Add the clone of the neighbor to the neighbors list of the clone of the current node.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 * this.val = val === undefined ? 0 : val;
 * this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    // Map to store: Original Node -> Cloned Node
    const visited = new Map();

    // Clone the first node and add to map
    visited.set(node, new Node(node.val));

    // Queue for BFS
    const queue = [node];

    while (queue.length > 0) {
        const curr = queue.shift();

        // Iterate through all neighbors of the current node
        for (let neighbor of curr.neighbors) {
            // If the neighbor hasn't been cloned yet
            if (!visited.has(neighbor)) {
                // 1. Create the clone
                visited.set(neighbor, new Node(neighbor.val));
                // 2. Add the original neighbor to queue to process its neighbors later
                queue.push(neighbor);
            }

            // Link the clones: 
            // Add the clone of the neighbor to the clone of the current node
            visited.get(curr).neighbors.push(visited.get(neighbor));
        }
    }

    return visited.get(node);
};