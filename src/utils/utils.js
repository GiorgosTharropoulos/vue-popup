import { intOrDecimalNegatedRegex } from './regexes';
/**
 *
 * @param {String} str
 * @returns {String} The numeric part of the original string as a string.
 */
export const getNumberFromString = str =>
  str.replace(intOrDecimalNegatedRegex, '');

/**
 * Get the index of the array in which the value should be inserted
 * Heavily inpired by the bisection method in numerical analysis
 * @param {Number[]} array Sorted Array
 * @param {Number} value
 * @returns
 */
export const getIndexOfSortedArray = (array, value) => {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = (low + high) / 2;
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

/**
 *
 * @param {Number[]} array Sorted aray
 * @param {Number} value Value to insert
 * @returns {Number[]}
 */
export const insertIntoSortedArray = (array, value) => {
  const index = getIndexOfSortedArray(array, value);
  return [...array.slice(0, index), value, ...array.slice(index)];
};
