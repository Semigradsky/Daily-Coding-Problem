export function easySolution(arr: number[]) {
    arr = [...new Set(arr.filter(x => x > 0))]
    const sum =  arr.reduce((a, b) => a + b, 0)
    const n = arr.length + 1
    return n * (2 + n - 1) / 2 - sum
}
