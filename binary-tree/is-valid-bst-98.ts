import { TreeNode } from "./TreeNode"


function isValidBSTRecursive(root: TreeNode, min: number[], max: number[]): boolean {
    let minLeft = [root.val], maxLeft = [root.val]
    if (root.left) {
        let res = isValidBSTRecursive(root.left, minLeft, maxLeft)
        if (!res) return false
        if (maxLeft[0] >= root.val) return false
    }

    let minRight = [root.val], maxRight = [root.val]
    if (root.right) {
        let res = isValidBSTRecursive(root.right, minRight, maxRight)
        if (!res) return false
        if (minRight[0] <= root.val) return false
    }

    min[0] = minLeft[0]
    max[0] = maxRight[0]

    return true
}


function isValidBST(root: TreeNode): boolean {
    let min = [], max = []
    return isValidBSTRecursive(root, min, max)
}


