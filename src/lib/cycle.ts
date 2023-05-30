import { Cycle } from "../types";

export const cycle: Cycle = (iterable, end = 10, cb) => {
    let arr: string[] | [] = []
    for (let i: number = 0; i < end; i++) {
        arr = [...arr, ...iterable.split('')]
    }

    if(cb){
        return cb(arr)
    }

    return arr
}