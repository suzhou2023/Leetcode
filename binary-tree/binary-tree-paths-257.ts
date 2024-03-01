import path from "path"
import { TreeNode, testTree } from "./TreeNode"

function binaryTreePath(node: TreeNode | null, path: string, paths: string[]) {
    if (!node) return null

    let p = path + '->' + node.val
    if (!node.left && !node.right) paths.push(p)
    binaryTreePath(node.left, path, paths)
    binaryTreePath(node.right, path, paths)
}

function binaryTreePaths(root: TreeNode | null): string[] {

    let paths: string[] = []
    binaryTreePath(root, root?.val + '', paths)

    return paths
}


{
    let res = binaryTreePaths(testTree)
    console.log(res)
}