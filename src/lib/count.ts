import { Count } from '../types';

/**
 * Returns an array of numbers from start to limit with a step of number.
 * @param start = 0
 * @param step = 2
 * @param limit = 10
 * @param cb = a callback function
 * @returns [1, 3, 5, 7, 9]
 */
export const count: Count = (start = 0, step = 1, limit = 100, cb) => {
  if (start > limit) return [];
  else if (start === limit) return [start];
  else {
    const arr: [number] | [] = [];
    for (let i: number = start; i <= limit; i += step) {
      arr.push(i as never);
    }

    if (cb) {
      return cb(arr);
    }

    return arr;
  }
};
