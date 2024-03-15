function backtracking78(n: number, k: number, startIndex: number, group: number[], res: number[][]) {
    // if (group.length == k) {
    //     res.push([...group])
    //     return
    // }

    // 注意剪枝操作
    for (let i = startIndex; i <= n - (k - group.length) + 1; i++) {
        group.push(i)
        backtracking78(n, k, i + 1, group, res)
        group.pop()
    }
}

function subsets(nums: number[]): number[][] {

}