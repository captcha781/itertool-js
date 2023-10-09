import { repeat } from '../lib/repeat';

test('Repeat Test: 01', () => {
  expect(repeat('ABCD', 3)).toStrictEqual('ABCDABCDABCD');
});
test('Repeat Test: 02', () => {
  expect(repeat(['A', 'B', 'C', 'D'], 3)).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']);
});
