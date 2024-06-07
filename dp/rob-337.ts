import { TreeNode } from "../binary-tree/TreeNode"

function rob337(root: TreeNode | null): number {
    let sum = traversal(root)

    return Math.max(sum[0], sum[1])
}

/**
 * 树形dp有点神奇
 */
function traversal(node: TreeNode | null): number[] {
    if (!node) return [0, 0]

    let left = traversal(node.left) // 偷左子树结果
    let right = traversal(node.right) // 偷右子树结果

    let sum1 = node.val + left[0] + right[0] // 偷当前节点
    let sum2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]) // 不偷当前节点

    return [sum2, sum1]
}