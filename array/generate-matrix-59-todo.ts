/**
 * 螺旋矩阵（数学规律模拟）
 * @param n 
 */
function generateMatrix(n: number): number[][] {
    let res: number[][] = new Array(n).fill(null).map(() => new Array(n).fill(0))
    let maxLevel = Math.floor(n / 2) + n % 2
    let level = 1, val = 1

    while (level <= maxLevel) {
        let i = level - 1, j = level - 1

        while (j < n - level) res[i][j++] = val++
        while (i < n - level) res[i++][j] = val++
        while (j > level - 1) res[i][j--] = val++
        while (i > level - 1) res[i--][j] = val++

        level++
    }

    if (n % 2 == 1) res[maxLevel - 1][maxLevel - 1] = n * n

    return res
}

{
    let res = generateMatrix(4)
    console.log(res)
}