import { TreeNode, testTree } from "./TreeNode"

function inorderTraversal(tree: TreeNode, vals: (number | undefined)[]) {
    if (tree.left) {
        inorderTraversal(tree.left, vals)
    }
    vals.push(tree.val)
    if (tree.right) {
        inorderTraversal(tree.right, vals)
    }
}

function preorderTraversal(tree: TreeNode, vals: (number | undefined)[]) {
    vals.push(tree.val)
    if (tree.left) {
        preorderTraversal(tree.left, vals)
    }
    if (tree.right) {
        preorderTraversal(tree.right, vals)
    }
}

function postorderTraversal(tree: TreeNode, vals: (number | undefined)[]) {
    if (tree.left) {
        postorderTraversal(tree.left, vals)
    }
    if (tree.right) {
        postorderTraversal(tree.right, vals)
    }
    vals.push(tree.val)
}


{
    let tree = testTree
    let vals = new Array()

    // inorderTraversal(tree, vals)
    // console.log('inorderTraversal', vals)

    // preorderTraversal(tree, vals)
    // console.log('preorderTraversal', vals)

    postorderTraversal(tree, vals)
    console.log('postorderTraversal', vals)
}