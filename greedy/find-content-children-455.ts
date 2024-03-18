function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let j = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[j] && j < g.length) j++
    }

    return j
}

{
    let g = [10, 9, 8, 7]
    let s = [5, 6, 7, 8]
    let res = findContentChildren(g, s)
    console.log(res)
}