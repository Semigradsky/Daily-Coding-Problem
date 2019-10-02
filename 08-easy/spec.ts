import { Node } from './../BinaryTree'
import { solution } from '.'

test('Tree from task description', () => {
    const node = new Node(0,
        new Node(1),
        new Node(0,
            new Node(1,
                new Node(1),
                new Node(1),
            ),
            new Node(0),    
        ),
    )
    expect(solution(node)).toBe(5)
})
