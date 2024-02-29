class TNode {
    val: number
    left: TNode | null
    right: TNode | null
    next: TNode | null
    constructor(val?: number, left?: TNode, right?: TNode, next?: TNode) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}

function connect(root: TNode | null): TNode | null {
    if (!root) return null

    let q: TNode[] = []

    q.push(root)
    while (q.length > 0) {
        let size = q.length

        for (let i = 0; i < size; i++) {
            let node = q.shift()
            if (node) node.next = i == size - 1 ? null : q[0]

            if (node?.left) q.push(node.left)
            if (node?.right) q.push(node.right)
        }
    }

    return root
}