export class TreeNode {
    val: number | undefined = undefined
    left: TreeNode | null = null
    right: TreeNode | null = null

    constructor(val?: number) {
        this.val = val
    }
}

export let testTree = new TreeNode(5)
testTree.left = new TreeNode(4)
testTree.left.left = new TreeNode(1)
testTree.left.right = new TreeNode(2)
testTree.right = new TreeNode(6)
testTree.right.left = new TreeNode(7)
testTree.right.right = new TreeNode(8)