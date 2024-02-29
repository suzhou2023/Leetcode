import { TreeNode } from "./TreeNode"
import { levelOrderTraversal } from "./traversal-level-order"

function levelOrderBottom(root: TreeNode | null): (number | undefined)[][] {
    if (!root) return []

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

    let i = 0, j = res.length - 1
    let tmp: (number | undefined)[]
    while (i <= j) {
        tmp = res[i]
        res[i++] = res[j]
        res[j--] = tmp
    }

    return res
}