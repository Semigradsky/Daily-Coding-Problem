import { solutionByOnePass, easySolution } from '.'

const runTests = (s: Function, name: string) => test(name, () => {
    expect(s([10, 15, 3, 7], 17)).toBe(true)
    expect(s([10, 15, 3], 17)).toBe(false)
    expect(s([], 17)).toBe(false)
    expect(s([-10, 15, 3, -7], -17)).toBe(true)
    expect(s([5, 15, 3, 6], 10)).toBe(false)
    expect(s([5, 5, 3, 6], 10)).toBe(true)
    expect(s([10], 10)).toBe(false)
    expect(s([10, 0], 10)).toBe(true)
})

runTests(easySolution, 'Easy solution')

runTests(solutionByOnePass, 'Solution by one pass')
