import { TreeNode, testTree } from "./TreeNode"

function getMinimumDifference(root: TreeNode): number {
    if (!root.left && !root.right) return Number.MAX_SAFE_INTEGER

    let min = Number.MAX_SAFE_INTEGER
    if (root.left) {
        let node = root.left
        while (node.right) node = node.right
        let leftMin = getMinimumDifference(root.left)
        min = Math.min(Math.abs(root.val - node.val), leftMin)
    }

    if (root.right) {
        let node = root.right
        while (node.left) node = node.left
        let rightMin = getMinimumDifference(root.right)
        min = Math.min(Math.abs(root.val - node.val), rightMin)
    }

    return min
}

{
    let res = getMinimumDifference(testTree)
    console.log(res)
}