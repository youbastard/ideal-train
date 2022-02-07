/**
 *
 * @param {number} num
 * @param {boolean} leadingZero
 * @returns
 */
export default function pct (num, leadingZero = false) {

  if (typeof num !== 'number' || isNaN(num)) {
    return '-';
  }

  if (!leadingZero) {
    return num.toFixed(3).slice(1);
  }

  return num.toFixed(3);

}
