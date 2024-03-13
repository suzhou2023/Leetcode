import { TreeNode } from "./TreeNode"


function traversal(tree: TreeNode, vals: number[]) {
    if (tree.left) {
        traversal(tree.left, vals)
    }
    vals.push(tree.val)
    if (tree.right) {
        traversal(tree.right, vals)
    }
}

function findModeArr(vals: number[]): number[] {
    let modes: number[] = []
    let curVal = Number.MAX_SAFE_INTEGER
    let curCount = 0
    let maxCount = 0

    for (let i = 0; i < vals.length; i++) {
        if (vals[i] == curVal) {
            curCount++
        } else {
            if (curCount >= maxCount && curCount > 0) {
                if (curCount > maxCount) {
                    modes.length = 0
                }
                modes.push(curVal)
                maxCount = curCount
            }
            curVal = vals[i]
            curCount = 1
        }
    }

    if (curCount >= maxCount) {
        if (curCount > maxCount) modes.length = 0
        modes.push(curVal)
    }

    return modes
}

function findMode(root: TreeNode): number[] {
    let vals: number[] = []
    traversal(root, vals)

    return findModeArr(vals)
}


{
    let vals = [0, 0, 1, 1]
    let modes = findModeArr(vals)
    console.log(modes)
}