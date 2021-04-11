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
function minesweeper(matrix) {
  const board = [];
  let counter = 0;

  for (let k = 0; k < matrix.length; k++) {
    board[k] = [];
  }

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i]) {
        counter++;
      }

      if (!matrix[j][i] && (j + 1) < matrix.length && matrix[j + 1][i]) {
        counter++;
      }

      if (!matrix[j][i] && (j - 1) >= 0 && matrix[j - 1][i]) {
        counter++;
      }

      if (!matrix[j][i] && (i - 1) >= 0 && matrix[j][i - 1]) {
        counter++;
      }

      if (!matrix[j][i] && (i + 1) < matrix[0].length && matrix[j][i + 1]) {
        counter++;
      }

      if (!matrix[j][i] && (j + 1) < matrix.length
      && (i + 1) < matrix[0].length && matrix[j + 1][i + 1]) {
        counter++;
      }

      if (!matrix[j][i] && (i - 1) >= 0 && (j - 1) >= 0 && matrix[j - 1][i - 1]) {
        counter++;
      }

      if (!matrix[j][i] && (j - 1) >= 0
      && (i + 1) < matrix[0].length && matrix[j - 1][i + 1]) {
        counter++;
      }

      if (!matrix[j][i] && (j + 1) < matrix.length
      && (i - 1) >= 0 && matrix[j + 1][i - 1]) {
        counter++;
      }

      board[j][i] = counter;
      counter = 0;
    }
  }

  return board;
}

module.exports = minesweeper;
