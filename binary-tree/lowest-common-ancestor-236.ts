import { TreeNode } from './TreeNode'

/**
 * 二叉树的最近公共祖先问题
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    return traversal(root, p, q)
}

function traversal(node: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if (node == p || node == q || node == null) return node

    let left = traversal(node.left, p, q)
    let right = traversal(node.right, p, q)

    if (left && right) return node

    return left ? left : right
}