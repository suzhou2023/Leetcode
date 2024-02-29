import { TreeNode } from "./TreeNode"

/**
 * 完全二叉树节点个数
 * @param root 
 * @returns 
 */
function countNodes(root: TreeNode | null): number {
    if (!root) return 0

    let depthLeft = 0, depthRight = 0
    let node: TreeNode | null = root
    while (node) {
        depthLeft++
        node = node.left
    }

    node = root
    while (node) {
        depthRight++
        node = node.right
    }

    if (depthLeft == depthRight) {
        return Math.pow(2, depthLeft) - 1
    } else {
        return countNodes(root.left) + countNodes(root.right) + 1
    }
}