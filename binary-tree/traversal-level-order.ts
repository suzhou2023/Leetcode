import { TreeNode, testTree } from "./TreeNode"

export function levelOrderTraversal(tree: TreeNode): number[][] {
    let q: TreeNode[] = []
    let res: number[][] = []

    q.push(tree)
    while (q.length > 0) {
        let size = q.length
        let levelArr: number[] = []

        for (let i = 0; i < size; i++) {
            let node = q.shift()
            let val = node?.val == undefined ? 0 : node.val
            levelArr.push(val)

            if (node?.left) q.push(node.left)
            if (node?.right) q.push(node.right)
        }
        res.push(levelArr)
    }

    return res
}


{
    //           5
    //     4          6
    //  1     2    7     8

    let vals = levelOrderTraversal(testTree)
    console.log(vals)
}