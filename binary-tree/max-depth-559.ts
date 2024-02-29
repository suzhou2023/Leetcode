import { NTreeNode } from "./level-order-429"

function maxDepth(root: NTreeNode | null): number {
    if (!root) return 0

    let q: NTreeNode[] = []
    let depth = 0

    q.push(root)
    while (q.length > 0) {
        depth++

        let size = q.length
        for (let i = 0; i < size; i++) {
            let node = q.shift()
            node?.children.forEach(e => q.push(e))
        }
    }

    return depth
}