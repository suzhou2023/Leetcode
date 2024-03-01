import path from "path"
import { TreeNode } from "./TreeNode"

function binaryTreePath(node: TreeNode | null, path: string): string | null {
    if (!node) return null


    binaryTreePath(node.left, path)
    binaryTreePath(node.right, path)

    return path + '->' + node.val
}

function binaryTreePaths(root: TreeNode | null): string[] {

}