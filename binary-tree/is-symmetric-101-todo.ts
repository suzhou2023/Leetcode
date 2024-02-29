import { TreeNode } from "./TreeNode"

/**
 * 简单题不那么简单
 * @param left 
 * @param right 
 * @returns 
 */
function compare(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true
    if (left && right) {
        if (left.val != right.val) return false
        if (!compare(left.left, right.right)) return false
        if (!compare(left.right, right.left)) return false
        return true
    }
    return false
}

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false

    return compare(root.left, root.right)
}
