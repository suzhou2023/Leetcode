import { TreeNode, testTree } from "./TreeNode"

function preorderTraversal(tree: TreeNode): (number | undefined)[] {
    let s: TreeNode[] = []
    let res: (number | undefined)[] = []

    s.push(tree)
    while (s.length > 0) {
        let node = s.pop()
        res.push(node?.val)
        if (node?.right) {
            s.push(node.right)
        }
        if (node?.left) {
            s.push(node.left)
        }
    }

    return res
}

function inorderTraversal(tree: TreeNode): (number | undefined)[] {
    let s: (TreeNode | undefined)[] = []
    let res: (number | undefined)[] = []

    let node: TreeNode | undefined | null = tree
    while (node || s.length > 0) {
        if (node) {
            s.push(node)
            node = node.left
        } else {
            node = s.pop()
            res.push(node?.val)
            node = node?.right
        }
    }

    return res
}

function postorderTraversal(tree: TreeNode): (number | undefined)[] {
    let s: (TreeNode | undefined)[] = []
    let res: (number | undefined)[] = []

    let node: TreeNode | undefined | null = tree
    while (node || s.length > 0) {
        if (node) {
            s.push(node)
            node = node.left
        } else {
            node = s.pop()
            res.push(node?.val)
            node = node?.right
        }
    }

    return res
}


{
    // let vals = preorderTraversal(testTree)
    let vals = inorderTraversal(testTree)
    console.log(vals)
}

//         5
//     4       6
//  1    2   7    8