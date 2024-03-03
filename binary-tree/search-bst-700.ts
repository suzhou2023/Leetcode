import { TreeNode } from "./TreeNode"

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null

    let node: TreeNode | null = root
    while (node) {
        if (node.val == val) return node
        if (val < node.val) {
            node = node.left
        } else {
            node = node.right
        }
    }

    return null
}