export function easySolution(list: number[], k: number) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === k) {
                return true
            }
        }
    }

    return false
}

export function solutionByOnePass(list: number[], k: number) {
    const map = new Map<number, boolean>()

    for (const number of list) {
        if (map.has(number)) {
            return true
        }

        map.set(k - number, true)
    }

    return false
}
