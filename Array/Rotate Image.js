/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    verticalReverse(matrix);
    swapByDiagonal(matrix);
};

var verticalReverse = function(matrix) {
    let n = matrix.length;
    let temp;
    let end = matrix.length - 1;
    for (let start = 0; start < n / 2; start++) {
        temp = matrix[start];
        matrix[start] = matrix[end];
        matrix[end] = temp;
        end--;
    }
};

var swapByDiagonal = function(matrix) {
    let n = matrix.length;
    let temp;
    for (let y = 0; y < n; y++) {
        for (let x = y + 1; x < n; x++) {
            temp = matrix[y][x];
            matrix[y][x] = matrix[x][y];
            matrix[x][y] = temp;
        }
    }
};