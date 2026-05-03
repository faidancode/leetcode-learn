// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// The distance between two cells sharing a common edge is 1.

// To find the distance of the nearest 0 for every cell, the most efficient approach is Breadth-First Search (BFS).

// To find the distance of the nearest 0 for every cell, the most efficient approach is Breadth-First Search (BFS).

// The Strategy
// Instead of starting from each 1 and searching for a 0 (which would be slow), we do the opposite:

// 1.Multi-source BFS: Start by adding all 0s to a queue. These are our "starting points" with a distance of 0.

// 2. Initialize Distances: For all 1s, set their initial distance to infinity (or a very large number).

// 3. Expand: As we pop a cell from the queue, look at its neighbors. If a neighbor's current distance is greater than the current cell's distance + 1, we update it and add that neighbor to the queue.

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const queue = [];

  // 1. Initialize the queue with all '0' positions
  // and mark '1's as unvisited (Infinity)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c]);
      } else {
        mat[r][c] = Infinity;
      }
    }
  }

  // Direction vectors for Up, Down, Left, Right
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // 2. BFS from all '0's simultaneously
  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      // If the neighbor is within bounds and we found a shorter path
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        if (mat[nr][nc] > mat[r][c] + 1) {
          mat[nr][nc] = mat[r][c] + 1;
          queue.push([nr, nc]);
        }
      }
    }
  }

  return mat;
};


// Explanation of the Logic
// Using Example 2: mat = [[0,0,0],[0,1,0],[1,1,1]]

// Preparation:
// - Queue starts with all 0 coordinates: [[0,0], [0,1], [0,2], [1,0], [1,2], [2,0]].
// - The 1s at (1,1), (2,1), and (2,2) are temporarily set to Infinity.

// BFS Step 1:
// - We pop (1,0) (a zero). Its neighbor is (1,1).
// - mat[1][1] is Infinity. Since $0 + 1 < \text{Infinity}$, we update mat[1][1] = 1 and add (1,1) to the queue.

// BFS Step 2:
// - Eventually, we pop (1,1) (now has distance 1).
// - Its neighbor is (2,1).
// - mat[2][1] is Infinity. Since $1 + 1 < \text{Infinity}$, we update mat[2][1] = 2 and add it to the queue.