import { TreeNode } from "./TreeNode"


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