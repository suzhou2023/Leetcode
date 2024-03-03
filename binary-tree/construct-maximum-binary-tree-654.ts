import { TreeNode } from "./TreeNode"

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length == 0) return null

    let rootIndex = nums.findIndex(e => e == Math.max(...nums)) // 根节点索引
    let rootVal = nums[rootIndex] // 根节点

    let leftNums = nums.slice(0, rootIndex) // 左子树
    let rightNums = nums.slice(rootIndex + 1) // 右子树

    let root = new TreeNode(rootVal)
    let left = constructMaximumBinaryTree(leftNums)
    let right = constructMaximumBinaryTree(rightNums)

    root.left = left
    root.right = right

    return root
}