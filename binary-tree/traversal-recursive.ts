import { TreeNode, testTree } from "./TreeNode"

/**
 * 递归遍历写法比较简单，唯一要注意的是，传入节点可为空，这样在写法上比较简洁和统一。
 */

function inorderTraversal(node: TreeNode | null, vals: number[]) {
    if (node == null) return

    inorderTraversal(node.left, vals)
    vals.push(node.val)
    inorderTraversal(node.right, vals)
}

function preorderTraversal(node: TreeNode | null, vals: number[]) {
    if (node == null) return

    vals.push(node.val)
    preorderTraversal(node.left, vals)
    preorderTraversal(node.right, vals)
}

function postorderTraversal(node: TreeNode | null, vals: number[]) {
    if (node == null) return

    postorderTraversal(node.left, vals)
    postorderTraversal(node.right, vals)
    vals.push(node.val)
}


function preorderTraversal2(node: TreeNode | null, vals: number[], vals2: number[]) {
    if (node == null) return

    vals.push(node.val)
    preorderTraversal2(node.left, vals, vals2)
    preorderTraversal2(node.right, vals, vals2)
    vals2.push(node.val)
}


{
    let tree = testTree
    let vals: number[] = [], vals2: number[] = []

    // inorderTraversal(tree, vals)
    // console.log('inorderTraversal', vals)

    preorderTraversal2(tree, vals, vals2)
    console.log('vals', vals)
    console.log('vals2', vals2)

    // postorderTraversal(tree, vals)
    // console.log('postorderTraversal', vals)
}