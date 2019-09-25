import { easySolution, wrongSolution, fastSolution } from '.'

const runTests = (s: Function, name: string) => test(name, () => {
    expect(s([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24])
    expect(s([3, 2, 1])).toStrictEqual([2, 3, 6])
    expect(s([-3, -2, -1])).toStrictEqual([2, 3, 6])
    expect(s([])).toStrictEqual([])
    expect(s([1])).toStrictEqual([1])
    expect(s([1, 2, 3, 0])).toStrictEqual([0, 0, 0, 6])
})

runTests(easySolution, 'Easy solution')

runTests(fastSolution, 'Fast solution')

// runTests(wrongSolution, 'Wrong solution')
