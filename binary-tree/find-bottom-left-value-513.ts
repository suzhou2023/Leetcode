import { TreeNode } from "./TreeNode"

function findBottomLeftValue(root: TreeNode | null): number | null | undefined {
    if (!root) return null

    let q: TreeNode[] = []
    let res: (number | undefined)[][] = []

    q.push(root)
    while (q.length > 0) {
        let size = q.length
        let levelArr: (number | undefined)[] = []

        for (let i = 0; i < size; i++) {
            let node = q.shift()
            levelArr.push(node?.val)

            if (node?.left) q.push(node.left)
            if (node?.right) q.push(node.right)
        }
        res.push(levelArr)
    }

    return res.slice(-1)[0][0]
}