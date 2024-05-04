import { TreeNode } from "./TreeNode"

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length == 0) return null

    let rootVal = preorder[0] // 根节点
    let rootIndex = inorder.findIndex(e => e == rootVal) // 中序根节点索引
    let leftInorder = inorder.slice(0, rootIndex) // 左子树中序
    let rightInorder = inorder.slice(rootIndex + 1) // 右子树中序
    let leftPreorder = preorder.slice(1, leftInorder.length + 1) // 左子树前序
    let rightPreorder = preorder.slice(leftInorder.length + 1) // 右子树前序

    let root = new TreeNode(rootVal)
    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)

    return root
}

{
    let inorder = [1, 2, 3]
    let postorder = [3, 2, 1]
    // buildTree(inorder, postorder)
    console.log(inorder.slice(10))
}