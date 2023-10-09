import { Repeat } from '../types';

/**
 * Returns an array of numbers from start to limit with a step of number.
 * @param item = string ||
 * @param times = 2
 * @param cb = a callback function
 * @returns array || string || customized with callback
 */
export const repeat: Repeat = (item, times, cb) => {
  const arr: any = [];

  for (let i = 0; i < times; i++) {
    arr.push(item);
  }

  if (cb) {
    return cb(arr);
  } else {
    if (Array.isArray(item)) {
      return arr.flat();
    } else if (typeof item === 'string') {
      return arr.join('');
    } else {
      return arr;
    }
  }
};
