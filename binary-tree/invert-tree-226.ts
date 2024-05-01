import { TreeNode } from "./TreeNode"

/**
 * 翻转二叉树，前序和后序都可以
 * @param node 
 */
function postorderTraversal(node: TreeNode) {
    if (node.left) {
        postorderTraversal(node.left)
    }
    if (node.right) {
        postorderTraversal(node.right)
    }
    if (node.left || node.right) {
        let tmp = node.left
        node.left = node.right
        node.right = tmp
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null

    postorderTraversal(root)
    return root
}