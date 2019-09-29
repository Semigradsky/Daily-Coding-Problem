import { easySolution } from '.'

const runTests = (s: Function, name: string) => test(name, () => {
    expect(s([3, 4, -1, 1])).toBe(2)
    expect(s([1, 2, 0])).toBe(3)
    expect(s([])).toBe(1)
    expect(s([1])).toBe(2)
    expect(s([1, 1])).toBe(2)
})

runTests(easySolution, 'Easy solution')
