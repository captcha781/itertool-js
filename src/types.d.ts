export interface CallbackCycle {
    (arr: [number]|[]): any
}

export interface Count {
    (start: number, step: number, limit: number, cb?: CallbackCycle): [number]|[]
}