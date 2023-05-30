import { count } from '../index'

test('Count Test: 01', () => {
    expect(count(1, 1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('Count Test: 02', () => {
    expect(count(1, 2, 10)).toStrictEqual([1, 3, 5, 7, 9])
})

test('Count Test: 03', () => {
    expect(count(1, 2, 10, (arr) => {
        return true
    })).toBe(true)
})