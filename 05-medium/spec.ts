import { car, cons, cdr } from '.'

test('', () => {
    expect(car(cons(3, 4))).toBe(3)
    expect(cdr(cons(3, 4))).toBe(4)
})
