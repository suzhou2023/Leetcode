import { TreeNode, testTree } from "./TreeNode"

export function levelOrderTraversal(tree: TreeNode): (number | undefined)[][] {
    let q: TreeNode[] = []
    let res: (number | undefined)[][] = []

    q.push(tree)
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

    return res
}


{
    //           5
    //     4          6
    //  1     2    7     8

    let vals = levelOrderTraversal(testTree)
    console.log(vals)
}