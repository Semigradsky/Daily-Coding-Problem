export class Node<T> {
    constructor(public value: T, public left: Node<T> = null, public right: Node<T> = null) {}
}

function inorderTraversal<T>(root: Node<T>, fun: (node: Node<T>) => void) {
    if (!root) {
        return
    }

    inorderTraversal(root.left, fun)
    fun(root)
    inorderTraversal(root.right, fun)
}

export function printValues<T>(root: Node<T>) {
    const values: Node<T>[] = []

    inorderTraversal(root, (node) => {
        values.push(node)
    })

    return values.join(' ')
}
