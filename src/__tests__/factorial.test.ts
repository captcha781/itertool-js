import { factorial } from '../lib/factorial';

test('Factorial Test 01', () => {
  expect(factorial(5)).toBe(120);
});

test('Factorial Test 02', () => {
  expect(() => factorial('04gb' as any)).toThrow(TypeError);
});

test('Factorial Test 03', () => {
  expect(factorial('05' as any)).toBe(120);
});
