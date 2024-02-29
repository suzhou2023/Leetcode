class TreeNode {
    val: number
    children: TreeNode[]
    constructor(val?: number) {
        this.val = (val == undefined ? 0 : val)
        this.children = []
    }
}

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    let q: TreeNode[] = []
    let res: number[][] = []

    q.push(root)
    while (q.length > 0) {
        let size = q.length
        let levelArr: number[] = []

        for (let i = 0; i < size; i++) {
            let node = q.shift()
            if (node?.val != undefined) levelArr.push(node?.val)
            node?.children.forEach(e => q.push(e))
        }
        res.push(levelArr)
    }

    return res
}