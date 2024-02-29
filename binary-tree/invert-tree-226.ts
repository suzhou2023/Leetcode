import { TreeNode } from "./TreeNode"

function postorderTraversal(node: TreeNode, vals: (number | undefined)[]) {
    if (node.left) {
        postorderTraversal(node.left, vals)
    }
    if (node.right) {
        postorderTraversal(node.right, vals)
    }
    vals.push(node.val)
}