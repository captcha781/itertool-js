import { Count } from '../types'

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

