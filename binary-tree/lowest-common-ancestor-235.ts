import { TreeNode } from "./TreeNode"

/** 
 * 二叉搜索树的最近公共祖先问题
 */
function lowestCommonAncestor(node: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    return traversal(node, p, q)
}

function traversal(node: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if (!node) return null

    if (p.val < node.val && q.val < node.val) return traversal(node.left, p, q)
    if (p.val > node.val && q.val > node.val) return traversal(node.right, p, q)

    return node
}

