export interface CallbackInfinite {
    (arr: [number]|[]|[string]|string[]|number[]): any
}

export interface Count {
    (start: number, step: number, limit: number, cb?: CallbackInfinite): [number]|[]|number[]
}

export interface Cycle {
    (iterable:string, end: number, cb?: CallbackInfinite):string[]|[]|[string]
}

export interface Repeat {
    (item:any, times: number, cb?: CallbackInfinite):any[]
}