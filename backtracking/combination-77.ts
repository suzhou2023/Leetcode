/**
 * 组合问题：从1到n选k个不重复的数
 * @param n 最大值
 * @param k 取几个数
 * @param start 每一轮递归中，循环的开始数字
 * @param group 存放一个组合
 */
let count77 = 0
function backtracking77(n: number, k: number, start: number, group: number[], res: number[][]) {
    count77 += 1 // test
    if (group.length == k) {
        res.push([...group])
        return
    }

    for (let i = start; i <= n; i++) {
        group.push(i)
        backtracking77(n, k, i + 1, group, res)
        group.pop() // 回溯
    }
}

function combine(n: number, k: number): number[][] {
    let res: number[][] = []
    let group: number[] = []
    backtracking77(n, k, 1, group, res)
    return res
}

/**
 *                                                              (12345678)
 *                --------------------------------------------------------------------------------------------------------------
 *                |(pick 1)                  |(pick 2)               |(pick 3)          |(pick 4)       |(pick 5)   |(pick 6)  |(pick 7)
 *                |                          |                       |                  |               |           |          |
 *            (2345678)                   (345678)                (45678)             (5678)           (678)       (78)       (8)
 *    ------------------------      --------------------     -----------------     -------------     ---------     -----       -
 *    |  |   |   |   |   |   |      |  |   |   |   |   |     |   |   |   |   |     |   |   |   |     |   |   |     |   |       |
 *  (12)(13)(14)(15)(16)(17)(18)  (23)(24)(25)(26)(27)(28)  (34)(35)(36)(37)(38)  (45)(46)(47)(48)  (56)(57)(58)  (67)(68)    (78)
 */

{
    let res = combine(100, 4)
    console.log(res)
    console.log('len', res.length)
    console.log('count', count77)
}