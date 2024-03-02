import { TreeNode } from "./TreeNode"

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length == 0) return null

    let rootVal = postorder[postorder.length - 1] // 根节点
    let rootIndex = inorder.findIndex(e => e == rootVal) // 中序根节点索引
    let leftInorder = inorder.slice(0, rootIndex) // 左子树中序
    let rightInorder = inorder.slice(rootIndex + 1) // 右子树中序
    let leftPostorder = postorder.slice(0, leftInorder.length) // 左子树后序
    let rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1) // 右子树后序

    let root = new TreeNode(rootVal)
    let left = buildTree(leftInorder, leftPostorder)
    let right = buildTree(rightInorder, rightPostorder)

    root.left = left
    root.right = right

    return root
}

{
    let inorder = [1, 2, 3]
    let postorder = [3, 2, 1]
    buildTree(inorder, postorder)
}