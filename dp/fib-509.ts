function fib(n: number): number {
    if (n == 0) return 0
    if (n == 1) return 1

    let dpn = 0, dpi = 0, dpj = 1
    for (let i = 2; i <= n; i++) {
        dpn = dpi + dpj
        dpi = dpj
        dpj = dpn
    }

    return dpn
}