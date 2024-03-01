import { TreeNode } from "./TreeNode"


/**
 * 如果是一个平衡二叉树，返回其高度；否则返回-1
 * @param root 
 * @returns 
 */
function balancedTreeHeight(root: TreeNode | null): number {
    if (!root) return 0

    let leftHeight = balancedTreeHeight(root.left)
    if (leftHeight == -1) return -1
    let rightHeight = balancedTreeHeight(root.right)
    if (rightHeight == -1) return -1

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1
    }

    return Math.max(leftHeight, rightHeight) + 1
}

function isBalanced(root: TreeNode | null): boolean {
    return balancedTreeHeight(root) >= 0
}