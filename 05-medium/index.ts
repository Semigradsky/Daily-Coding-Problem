type Pair<T, F> = (f: F) => F extends (a: T, b: T) => infer O ? O : any;

export function cons<T, F extends (a: T, b: T) => any>(a: T, b: T): Pair<T, F> {
    return f => f(a, b);
}

export function car<T>(pair: Pair<T, (a: T, b: T) => T>) {
    return pair(x => x)
}

export function cdr<T>(pair: Pair<T, (a: T, b: T) => T>) {
    return pair((_, x) => x)
}
