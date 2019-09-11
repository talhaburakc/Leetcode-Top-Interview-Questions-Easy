/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowMap = {};
    let colMap = {};
    let blockMap = {};
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            if ( board[y][x] != '.' && (('' + x + board[y][x]) in rowMap || ('' + y + board[y][x]) in colMap || ('' + (Math.floor(x / 3)) + (Math.floor(y / 3)) + board[y][x]) in blockMap)) {
                return false;
            } else {
                rowMap['' + x + board[y][x]] = true;
                colMap['' + y + board[y][x]] = true;
                blockMap['' + (Math.floor(x / 3)) + (Math.floor(y / 3)) + board[y][x]] = true;
            }
        }
    }
    return true;
};