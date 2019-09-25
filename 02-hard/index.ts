export function easySolution(list: number[]): number[] {
    const result: number[] = []

    for (let i = 0; i < list.length; i++) {
        let product = 1

        for (let j = 0; j < list.length; j++) {
            if (i !== j) {
                product *= list[j]
            }
        }

        result.push(product)
    }

    return result
}

export function wrongSolution(list: number[]): number[] {
    const product = list.reduce((a ,b) => a * b, 1)

    return list.map(number => product / number) // division to 0
}

export function fastSolution(list: number[]): number[] {
    const countNumbers = list.length

    if (countNumbers === 0) {
        return []
    }

    // Construct a temporary array contains product of all elements on left of list[i]
    const leftProduct = Array(countNumbers)
    leftProduct[0] = 1

    for (let i = 1; i < countNumbers; i++) {
        leftProduct[i] = list[i - 1] * leftProduct[i - 1]
    }

    // Construct a temporary array contains product of all elements on right of list[i]
    const rightProduct = Array(countNumbers)
    rightProduct[countNumbers - 1] = 1

    for (let j = countNumbers - 2; j >= 0; j--) {
        rightProduct[j] = list[j + 1] * rightProduct[j + 1]
    }

    const result = Array(countNumbers)

    for (let i = 0; i < countNumbers; i++) {
        result[i] = leftProduct[i] * rightProduct[i]
    }

    return result
}
