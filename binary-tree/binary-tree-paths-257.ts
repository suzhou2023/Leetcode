import { TreeNode, testTree } from "./TreeNode"

function binaryTreePath(node: TreeNode | null, path: string, paths: string[]) {
    if (!node) return null

    let curPath = path.length > 0 ? path + '->' + node.val : node.val + ''
    if (!node.left && !node.right) paths.push(curPath)
    binaryTreePath(node.left, curPath, paths)
    binaryTreePath(node.right, curPath, paths)
}

function binaryTreePaths(root: TreeNode | null): string[] {

    let paths: string[] = []
    binaryTreePath(root, '', paths)

    return paths
}


{
    let res = binaryTreePaths(testTree)
    console.log(res)
}
