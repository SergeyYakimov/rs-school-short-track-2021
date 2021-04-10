/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split('.').reverse());
  }

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      if (k === 0) {
        arr[j][k] = `.${arr[j][k]}`;
      } else {
        arr[j][k] = `${arr[j][k - 1]}.${arr[j][k]}`;
      }
    }
  }

  const domainsArr = arr.flat(1);

  for (let m = 0; m < domainsArr.length; m++) {
    if (typeof obj[domainsArr[m]] === 'undefined') {
      obj[domainsArr[m]] = 1;
    } else {
      obj[domainsArr[m]] += 1;
    }
  }

  return obj;
}

module.exports = getDNSStats;
