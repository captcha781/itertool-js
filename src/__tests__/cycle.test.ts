import { cycle } from '../lib/cycle';

test('Cycle Test: 01', () => {
  expect(cycle('ABCD', 3)).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']);
});

test('Cycle Test: 02', () => {
  expect(
    cycle('ABCD', 3, (arr) => {
      return true;
    }),
  );
});
