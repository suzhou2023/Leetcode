import { TreeNode } from "./TreeNode"

function insertIntoBST(root: TreeNode | null, node: TreeNode | null): TreeNode | null {
    if (root == null) return node
    if (node == null) return root

    if (node.val < root.val) root.left = insertIntoBST(root.left, node)
    if (node.val > root.val) root.right = insertIntoBST(root.right, node)

    return root
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root == null) return null
    if (root.val == key) return insertIntoBST(root.left, root.right)

    let node: TreeNode | null = root, p: TreeNode | null = root
    while (node) {
        if (node.val == key) {
            let left = node.left
            let right = node.right
            if (node.val == p?.val) {
                p = left
            }
            if (node.val < p.val) {
                p.left = left
            } else {
                p.right = left
            }
            insertIntoBST(left, right)
        } else {
            p = node
            if (key < node.val) {
                node = node.left
            } else {
                node = node.right
            }
        }
    }

    return root
}