import { TreeNode } from "./TreeNode"

function isValidBST(root: TreeNode | null): boolean {
    if (!root) return true

    if (root.left && root.left.val >= root.val) return false

    if (root.right && root.right.val <= root.val) return false

    let res = isValidBST(root.left)
    if (!res) return false
    res = isValidBST(root.right)
    if (!res) return false

    return true
}

//          5
//      4       6
//          3       7
