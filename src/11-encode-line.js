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
function encodeLine(str) {
  const arr = [];
  const stack = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === stack[0]) {
      counter++;
    }

    if (stack.length === 0) {
      stack.push(str[i]);
    }

    if (str[i] !== stack[0]) {
      const el = stack.pop();
      if (counter > 1) {
        arr.push(`${counter}${el}`);
      } else {
        arr.push(el);
      }
      stack.push(str[i]);
      counter = 1;
    }

    if (i === str.length - 1) {
      const el = stack.pop();
      if (counter > 1) {
        arr.push(`${counter}${el}`);
      } else {
        arr.push(el);
      }
    }
  }

  return arr.join('');
}

module.exports = encodeLine;
