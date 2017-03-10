/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // it was '1' not 1 
    var x = grid.length;
    if (x === 0) return 0;  //if x===0, y cannot be calculated!!!
    var y = grid[0].length;
    if (y === 0) return 0;
    var count = 0;
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
         if (grid[i][j] === '1') {
             dfs(grid, i, j);
             count++;
         }  
      } 
    }
    return count;
};
var dfs = function(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
    if (grid[i][j] === '1') {
         grid[i][j] = '0';
         dfs(grid, i + 1, j);
         dfs(grid, i - 1, j);
         dfs(grid, i, j - 1);
         dfs(grid, i, j + 1);
    }
};
