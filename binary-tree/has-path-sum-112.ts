import { TreeNode } from "./TreeNode"

function hasPathSumR(node: TreeNode | null, sum: number, targetSum: number): boolean {
    if (!node) return false

    sum += node.val == undefined ? 0 : node.val
    if (!node.left && !node.right) {
        if (sum == targetSum) return true
    }
    let res = hasPathSumR(node.left, sum, targetSum)
    if (res) return true
    res = hasPathSumR(node.right, sum, targetSum)
    if (res) return true

    return false
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return hasPathSumR(root, 0, targetSum)
}