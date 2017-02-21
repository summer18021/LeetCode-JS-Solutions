/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board.length<3) return;
    if(board[0].length<3) return;
    var row=board.length,
        col=board[0].length;
    /*
    First, check the four border of the matrix. If there is a element is 
   'O, alter it and all its neighbor 'O' elements to '1'.
   */
    for(let i=0;i<row;i++){
        check(board,i,0,row,col);
        check(board,i,col-1,row,col);
    }
    for(let j=0;j<col;j++){
        check(board,0,j,row,col);
        check(board,row-1,j,row,col);
    }
    /*
    change 'O' to 'X'
    change '1' to 'O'
    */
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(board[i][j]==='O') board[i][j]='X';
            if(board[i][j]==='1') board[i][j]='O';
        }
    }
};

var check = function(board,i,j,row,col){
   if(board[i][j]==='O'){
       board[i][j]='1';
       if(i>1) check(board,i-1,j,row,col);
       if(i+1<row) check(board,i+1,j,row,col);
       if(j>1) check(board,i,j-1,row,col);
       if(j+1<col) check(board,i,j+1,row,col);  
   }
};
