import { Node } from './../BinaryTree'
import { serialize, deserialize } from '.'

test('Tree from task description', () => {
    const node = new Node('root',
        new Node('left',
            new Node('left.left')
        ),
        new Node('right')
    )
    expect(deserialize(serialize(node)).left.left.value).toBe('left.left')
    expect(deserialize(serialize(node)).right.value).toBe('right')
    expect(deserialize(serialize(node)).right.left).toBe(null)
})

test('Only left leaves', () => {
    const node = new Node('root',
        new Node('left',
            new Node('left.left')
        )
    )
    expect(deserialize(serialize(node)).left.left.value).toBe('left.left')
    expect(deserialize(serialize(node)).left.value).toBe('left')
    expect(deserialize(serialize(node)).right).toBe(null)
    expect(deserialize(serialize(node)).left.right).toBe(null)
})

test('Only right leaves', () => {
    const node = new Node('root',
        null,
        new Node('right',
            null,
            new Node('right.right')
        )
    )
    expect(deserialize(serialize(node)).right.right.value).toBe('right.right')
    expect(deserialize(serialize(node)).right.value).toBe('right')
    expect(deserialize(serialize(node)).left).toBe(null)
    expect(deserialize(serialize(node)).right.left).toBe(null)
})

test('Only root', () => {
    const node = new Node('root')
    expect(deserialize(serialize(node)).value).toBe('root')
    expect(deserialize(serialize(node)).left).toBe(null)
    expect(deserialize(serialize(node)).right).toBe(null)
})

test('Empty tree', () => {
    expect(deserialize(serialize(null))).toBe(null)
})
