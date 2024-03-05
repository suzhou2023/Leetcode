function climbStairs(n: number): number {
    if (n == 1) return 1
    if (n == 2) return 2

    let dpn_2 = 1, dpn_1 = 2, dpn = 0
    for (let i = 3; i <= n; i++) {
        dpn = dpn_1 + dpn_2
        dpn_2 = dpn_1
        dpn_1 = dpn
    }

    return dpn
}

{
    let res = climbStairs(1000)
    console.log(res)
}