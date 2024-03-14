import { TreeNode } from "./TreeNode"

/** 
 * 二叉搜索树的最近公共祖先问题
 */

function lowestCommonAncestor(node: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if (node == null) return null

    let left = p.val <= q.val ? p : q
    let right = p.val <= q.val ? q : p

    if (left.val <= node.val && right.val >= node.val) return node

    if (right.val <= node.val) {
        return lowestCommonAncestor(node.left, left, right)
    }

    if (left.val >= node.val) {
        return lowestCommonAncestor(node.right, left, right)
    }

    return null
}

