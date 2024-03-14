import { TreeNode } from './TreeNode'

/**
 * 二叉树的最近公共祖先问题
 */

function lowestCommonAncestor(node: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if (node == p || node == q || node == null) return node

    let left = lowestCommonAncestor(node.left, p, q)
    let right = lowestCommonAncestor(node.right, p, q)

    if (left != null && right != null) return node

    return left == null ? right : left
}