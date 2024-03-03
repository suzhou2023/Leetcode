import { TreeNode } from "./TreeNode"

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1) return root2
    if (!root2) return root1

    let root = new TreeNode(root1.val + root2.val)
    let left = mergeTrees(root1.left, root2.left)
    let right = mergeTrees(root1.right, root2.right)

    root.left = left
    root.right = right

    return root
}