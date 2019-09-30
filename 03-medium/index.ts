import { Node } from './BinaryTree'

export function serialize(root: Node<string>) {
    if (root === null) {
        return ''
    }

    return `${root.value}(${serialize(root.left)})(${serialize(root.right)})`
}

export function deserialize(str: string) {
    if (str.length === 0) {
        return null
    }

    const startIndexOfLeft = str.indexOf('(')
    let endIndexOfLeft = startIndexOfLeft + 1

    const node = new Node(str.slice(0, startIndexOfLeft))

    let countOpenBraces = 0
    for (let i = startIndexOfLeft + 1; i < str.length; i++) {
        if (countOpenBraces === 0 && str[i] === ')') {
            endIndexOfLeft = i
            break
        }

        if (str[i] === '(') {
            countOpenBraces++
        }

        if (str[i] === ')') {
            countOpenBraces--
        }
    }

    node.left = deserialize(str.slice(startIndexOfLeft + 1, endIndexOfLeft))

    const endIndexOfRight = str.lastIndexOf(')')
    let startIndexOfRight = endIndexOfLeft + 1

    node.right = deserialize(str.slice(startIndexOfRight + 1, endIndexOfRight))

    return node
}
