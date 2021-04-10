/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  // const arr = [];
  // let counter;
  // const position = 0;
  // for (let i = position; i < str.length - 1;) {
  //   counter = 1;
  //   for (let j = i + 1; j < str.length; j++) {
  //     if (str[i] === str[j]) {
  //       counter++;
  //     } else if (counter === 1) {
  //       arr.push(str[i]);
  //       i = j;
  //       break;
  //     } else {
  //       arr.push(`${counter}${str[i]}`);
  //       i = j;
  //       break;
  //     }
  //   }
  // }

  // return arr.join('');
  throw new Error('Not implemented');
}

module.exports = encodeLine;
