// The Logic

// Iterate through every cell in the grid.

// Trigger BFS when we find a "1" (land). This means we've discovered a new island.

// Explore all connected land cells (up, down, left, right) using a queue and mark them as "0" (or "visited") so we don't count them again.

// Increment our counter each time a BFS cycle finishes.


/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let islandCount = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    // Directions for moving: Up, Down, Left, Right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // When we hit land, we start a BFS to "sink" the entire island
            if (grid[r][c] === '1') {
                islandCount++;
                
                // Start BFS
                let queue = [[r, c]];
                grid[r][c] = '0'; // Mark as visited immediately

                while (queue.length > 0) {
                    let [currR, currC] = queue.shift();

                    // Check all 4 neighbors
                    for (let [dr, dc] of directions) {
                        let nr = currR + dr;
                        let nc = currC + dc;

                        // Validate bounds and check if the neighbor is land
                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '1') {
                            queue.push([nr, nc]);
                            grid[nr][nc] = '0'; // Mark visited to avoid duplicate queuing
                        }
                    }
                }
            }
        }
    }

    return islandCount;
};