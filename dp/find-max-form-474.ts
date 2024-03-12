/**
 * dp[m][n] - 最多m个0和n个1的最大子集长度
 * 
 * num0(strs[i])
 * dp[m][n] = dp[m - num0][n-num1] + 1
 */

function findMaxForm(strs: string[], m: number, n: number): number {

    let dp: number[][] = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0))

    for (let index = 0; index < strs.length; index++) {
        let num0 = strs[index].split('').filter(str => str == '0').length
        let num1 = strs[index].length - num0

        for (let i = m; i >= num0; i--) {
            for (let j = n; j >= num1; j--) {
                dp[i][j] = Math.max(dp[i - num0][j - num1] + 1, dp[i][j])
            }
        }
    }

    return dp[m][n]
}

{
    let strs = ["10", "0001", "111001", "1", "0"]
    let res = findMaxForm(strs, 5, 3)
    console.log(res)
}