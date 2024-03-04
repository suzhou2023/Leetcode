import { TreeNode, testTree } from "./TreeNode"

/**
 * 中序遍历记录前一个节点
 * @param root 
 * @param prev 
 * @param minDiff 
 */
function traversal(root: TreeNode, prev: number[], minDiff: number[]) {
    if (root.left) {
        traversal(root.left, prev, minDiff)
    }

    minDiff[0] = Math.min(Math.abs(root.val - prev[0]), minDiff[0])
    prev[0] = root.val

    if (root.right) traversal(root.right, prev, minDiff)
}

function getMinimumDifference(root: TreeNode): number {
    let prev = [Number.MAX_SAFE_INTEGER], minDiff = [Number.MAX_SAFE_INTEGER]
    traversal(root, prev, minDiff)

    return minDiff[0]
}
