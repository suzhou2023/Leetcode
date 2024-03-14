import { TreeNode } from './TreeNode'

/**
 * BST的插入操作，比较简单。
 * 注意递归的时候递归到空节点再结束，可以让代码精简而统一。
 * 
 * @param node 
 * @param val 
 * @returns 
 */

function insertIntoBST(node: TreeNode | null, val: number): TreeNode | null {
    if (node == null) return new TreeNode(val)
    if (val < node.val) node.left = insertIntoBST(node.left, val)
    if (val > node.val) node.right = insertIntoBST(node.right, val)

    return node
}