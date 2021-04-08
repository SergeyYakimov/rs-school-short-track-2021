/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startIndx = 0;
  let endIndx = array.length - 1;
  let flag = false;
  let center = 0;
  let indx = -1;

  while (flag === false && startIndx <= endIndx) {
    center = Math.floor((startIndx + endIndx) / 2);
    if (array[center] === value) {
      flag = true;
      indx = center;
    } else if (array[center] > value) {
      endIndx = center - 1;
    } else {
      startIndx = center + 1;
    }
  }

  return indx;
}

module.exports = findIndex;
