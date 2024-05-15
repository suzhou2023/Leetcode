import { TreeNode } from "./TreeNode"

/**
 * 判断是否是完全二叉树
 * @param root 
 */
export function isComplete(root: TreeNode): boolean {
    let q: TreeNode[] = [root]

    let mark = false
    while (q.length > 0) {
        let size = q.length

        for (let i = 0; i < size; i++) {
            let node = q.shift()

            if (!node?.left && node?.right) return false // 某个节点左空右不空
            if (mark && (node?.left || node?.right)) return false // 出现了空孩子节点后，又出现了非空孩子节点
            if (!node?.left || !node?.right) mark = true

            if (node?.left) q.push(node.left)
            if (node?.right) q.push(node.right)
        }
    }

    return true
}