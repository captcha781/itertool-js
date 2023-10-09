import { Factorial } from '../types';

export const factorial: Factorial = (n, cb) => {
  if (n < 0 || !/^[0-9]+$/.test(String(n))) throw new TypeError();
  if (n === 0 && !cb) return 1;
  if (n === 0 && cb) return cb(1);
  else {
    let result = 1;
    for (let i = parseInt(n as unknown as string, 10); i >= 1; i--) {
      result *= i;
    }
    if (cb) return cb(result);
    return result;
  }
};
