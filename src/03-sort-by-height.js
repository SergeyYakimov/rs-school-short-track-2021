/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrIndx = [];
  const newArr = [...arr].filter((el) => el !== -1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrIndx.push(i);
    }
  }

  newArr.sort((a, b) => a - b);

  for (let j = 0; j < arrIndx.length; j++) {
    newArr.splice(arrIndx[j], 0, -1);
  }

  return newArr;
}

module.exports = sortByHeight;
