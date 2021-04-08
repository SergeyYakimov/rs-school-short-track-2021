/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  // const board = [];
  // for (let i = 0; i < matrix[0].length; i++) {
  //   for (let j = 0; j < matrix.length; j++) {
  //     board.push(matrix[j][i] ? 1 : 0)
  //   }
  // }

  // for (let k = 0; k < board[0].length; k++) {
  //   for (let l = 0; l < board.length; l++) {
  //     if (board[l][k] === 1) {
  //       if (board[l+1][k]) {
  //         board[l+1][k] = board[l+1][k] + 1;
  //       }
  //     }
  //   }
  // }

  // return board;
  throw new Error('Not implemented');
}

module.exports = minesweeper;
