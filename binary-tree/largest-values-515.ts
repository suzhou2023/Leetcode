import { TreeNode } from "./TreeNode"

function largestValues(root: TreeNode | null): number[] {
    if (!root) return []

    let q: TreeNode[] = []
    let res: number[][] = []

    q.push(root)
    while (q.length > 0) {
        let size = q.length
        let levelArr: number[] = []

        for (let i = 0; i < size; i++) {
            let node = q.shift()
            if (node?.val != undefined) levelArr.push(node.val)
            if (node?.left) q.push(node.left)
            if (node?.right) q.push(node.right)
        }
        res.push(levelArr)
    }

    return res.map(arr => Math.max(...arr))
}