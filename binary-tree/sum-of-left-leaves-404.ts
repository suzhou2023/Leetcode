import { TreeNode } from "./TreeNode"

function traversal(node: TreeNode | null, sum: number[]) {
    if (node?.left && !node?.left.left && !node?.left.right) {
        sum[0] += node?.left.val == undefined ? 0 : node?.left.val
    }

    if (node?.left) traversal(node?.left, sum)
    if (node?.right) traversal(node?.right, sum)
}

function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum = [0]
    traversal(root, sum)

    return sum[0]
}