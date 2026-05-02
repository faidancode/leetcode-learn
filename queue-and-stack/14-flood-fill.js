// You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill:

// Begin with the starting pixel and change its color to color.
// Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
// Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
// The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const originalColor = image[sr][sc];

  // If the starting pixel is already the target color,
  // no changes are needed.
  if (originalColor === color) return image;

  const fill = (r, c) => {
    // 1. Boundary Check: Is the pixel outside the grid?
    // 2. Color Check: Does it match the original color we want to replace?
    if (
      r < 0 ||
      r >= image.length ||
      c < 0 ||
      c >= image[0].length ||
      image[r][c] !== originalColor
    ) {
      return;
    }

    // Update the color
    image[r][c] = color;

    // Recursively fill adjacent pixels
    fill(r + 1, c); // Down
    fill(r - 1, c); // Up
    fill(r, c + 1); // Right
    fill(r, c - 1); // Left
  };

  fill(sr, sc);
  return image;
};

// Explanation of the Steps
// Using Example 1: image = [[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2

// Start at (1,1): Original color is 1. We change it to 2.

// Check Neighbors:

// -- (0,1) is 1: Change to 2, then check its neighbors.

// -- (2,1) is 0: Different color, so we stop there.

// -- (1,0) is 1: Change to 2, then check its neighbors.

// -- (1,2) is 0: Different color, so we stop there.

// Chain Reaction: Every 1 connected to the starting 1 eventually gets visited and turned into 2. The 0 values and the isolated 1 at (2,2) act as "walls" because they either don't match the original color or aren't connected to the path.