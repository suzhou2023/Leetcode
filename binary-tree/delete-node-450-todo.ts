import { TreeNode } from "./TreeNode"

/**
 * 代码写得有点繁琐，还可以优化
 */

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

    let node: TreeNode | null = root
    while (node) {
        if (node.left?.val == key) {
            if (node.left.left) {
                insertIntoBST(node.left.left, node.left.right)
                node.left = node.left.left
            } else {
                node.left = node.left.right
            }
        } else if (node.right?.val == key) {
            if (node.right.left) {
                insertIntoBST(node.right.left, node.right.right)
                node.right = node.right.left
            } else {
                node.right = node.right.right
            }
        }
        if (key < node.val) {
            node = node.left
        } else {
            node = node.right
        }
    }

    return root
}