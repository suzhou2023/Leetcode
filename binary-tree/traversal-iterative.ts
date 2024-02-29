/**
 * 先序、中序和后序三种迭代遍历方式，均是把要遍历的节点当作子树根节点
 */
import { TreeNode, testTree } from "./TreeNode"

function preorderTraversal(tree: TreeNode): (number | undefined)[] {
    let s: TreeNode[] = []
    let res: (number | undefined)[] = []

    // 入栈根节点
    s.push(tree)
    while (s.length > 0) {
        // 由于是先序，出栈子树根节点后先进行遍历
        let node = s.pop()
        res.push(node?.val)
        // 右子树根节点入栈
        if (node?.right) s.push(node.right)
        // 左子树根节点入栈
        if (node?.left) s.push(node.left)
    }

    return res
}

function inorderTraversal(tree: TreeNode): (number | undefined)[] {
    let s: (TreeNode | undefined)[] = []
    let res: (number | undefined)[] = []

    // 辅助指针
    let node: TreeNode | undefined | null = tree
    while (node || s.length > 0) {
        if (node) {
            // 入栈子树根节点
            s.push(node)
            // 指针移动到左子树
            node = node.left
        } else {
            // 出栈子树根节点进行遍历，因为上一轮左子树为空或已遍历
            let tmpNode = s.pop()
            res.push(tmpNode?.val)
            // 指针移动到节点右子树
            node = tmpNode?.right
        }
    }

    return res
}

function postorderTraversal(tree: TreeNode): (number | undefined)[] {
    let s: (TreeNode | undefined)[] = []
    let res: (number | undefined)[] = []

    // 辅助指针
    let node: TreeNode | undefined | null = tree
    // 记录上一次遍历的节点
    let preNode: TreeNode | undefined | null = null
    while (node || s.length > 0) {
        if (node) {
            // 入栈子树根节点
            s.push(node)
            // 指针移动到左子树
            node = node.left
        } else {
            // 出栈子树根节点
            let tmpNode = s.pop()
            // 右子树为空或右子树已遍历
            if (!tmpNode?.right || preNode == tmpNode?.right) {
                res.push(tmpNode?.val)
                preNode = tmpNode
            } else {
                // 节点右子树未遍历，重新入栈节点
                s.push(tmpNode)
                // 指针移动到节点右子树
                node = tmpNode?.right
            }
        }
    }

    return res
}


{
    //         5
    //     4       6
    //  1    2   7    8

    let vals1 = preorderTraversal(testTree) // 5,4,1,2,6,7,8
    console.log(vals1)
    let vals2 = inorderTraversal(testTree) // 1,4,2,5,7,6,8
    console.log(vals2)
    let vals3 = postorderTraversal(testTree) // 1,2,4,7,8,6,5
    console.log(vals3)
}
