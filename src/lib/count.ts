import { Count } from '../types'

/**
 * Returns an array of numbers from start to limit with a step of number.
 * @param start = 0
 * @param step = 2
 * @param limit = 10
 * @returns [1, 3, 5, 7, 9]
 */
export const count: Count = (start = 0, step = 1, limit = 100) => {

    if (start > limit) return []
    else if (start === limit) return [start]
    else {
        let arr: [number] | [] = []
        for (let i: number = start; i <= limit; i += step) {
            arr.push(i as never)
        }

        return arr
    }
}

