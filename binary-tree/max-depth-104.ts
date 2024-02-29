import { TreeNode } from "./TreeNode"

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0

    let q: TreeNode[] = []
    let depth = 0

    q.push(root)
    while (q.length > 0) {
        depth++

        let size = q.length
        for (let i = 0; i < size; i++) {
            let node = q.shift()
            if (node?.left) q.push(node.left)
            if (node?.right) q.push(node.right)
        }
    }

    return depth
}