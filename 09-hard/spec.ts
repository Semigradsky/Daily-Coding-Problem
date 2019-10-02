import { solution } from '.'

test('Examples from task description', () => {
    expect(solution([2, 4, 6, 2, 5])).toBe(13) // 2 6 5
    expect(solution([5, 1, 1, 5])).toBe(10) // 5 5
})
