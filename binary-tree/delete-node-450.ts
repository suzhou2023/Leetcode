import { TreeNode } from "./TreeNode"

/**
 * 可以借助BST插入
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

    // 两个指针，代码更清晰
    let p: TreeNode | null = root, node: TreeNode | null = null
    while (p) {
        if (key < p.val) {
            node = p.left
            if (node?.val == key) {
                p.left = insertIntoBST(node.left, node.right)
                return root
            }
            p = p.left
        } else {
            node = p.right
            if (node?.val == key) {
                p.right = insertIntoBST(node.left, node.right)
                return root
            }
            p = p.right
        }
    }

    return root
}