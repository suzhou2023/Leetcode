import { TreeNode, testTree } from "./TreeNode"

function preorderTraversal(tree: TreeNode): (number | undefined)[] {
    let s: TreeNode[] = []
    let res: (number | undefined)[] = []

    s.push(tree)
    while (s.length > 0) {
        let node = s.pop()
        res.push(node?.val)
        if (node?.right) {
            s.push(node.right)
        }
        if (node?.left) {
            s.push(node.left)
        }
    }

    return res
}

{
    let vals = preorderTraversal(testTree)
    console.log('preorderTraversal', vals)
}