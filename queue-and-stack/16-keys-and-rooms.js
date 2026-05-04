// Input: rooms = [[1],[2],[3],[]]
// Output: true
// Explanation:
// We visit room 0 and pick up key 1.
// We then visit room 1 and pick up key 2.
// We then visit room 2 and pick up key 3.
// We then visit room 3.
// Since we were able to visit every room, we return true.

// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.


// This is a Graph Traversal problem. Think of each room as a node and each key as a directed edge to another node. Since you start in room 0, you need to see if you can reach all other nodes in the graph.

// The Strategy
// We can solve this using either Breadth-First Search (BFS) or Depth-First Search (DFS).

// 1. Track Visited Rooms: Use a Set or a boolean array to keep track of which rooms we have already entered (to avoid infinite loops).

// 2. The Queue (BFS): Start with room 0 in a queue.

// 3. Explore: While the queue isn't empty:

// -- Take a key out.

// -- If that room hasn't been visited, mark it as visited and add all the keys found in that room to our queue.

// 4. Final Check: Compare the number of visited rooms to the total number of rooms.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const queue = [0]; // Start at room 0

  // Mark room 0 as visited
  visited.add(0);

  while (queue.length > 0) {
    // Take a room we have a key for
    const currentRoom = queue.shift();

    // Look at all keys available in this room
    for (const key of rooms[currentRoom]) {
      // If we haven't visited the room this key unlocks
      if (!visited.has(key)) {
        visited.add(key); // Mark it as visited
        queue.push(key); // Add it to our exploration list
      }
    }
  }

  // If the number of visited rooms equals total rooms, we succeed
  return visited.size === rooms.length;
};
