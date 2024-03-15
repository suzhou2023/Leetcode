
function backtracking(digits: string, index: number, map: Map<string, string>, group: string[], res: string[]) {
    if (group.length == digits.length) {
        res.push(group.join(''))
        return
    }

    let str = map.get(digits.charAt(index))
    if (!str) return

    for (let i = 0; i < str.length; i++) {
        group.push(str.charAt(i))
        backtracking(digits, index + 1, map, group, res)
        group.pop()
    }
}


function letterCombinations(digits: string): string[] {
    if (digits.length == 0) return []

    let map = new Map()
    map.set('2', 'abc')
    map.set('3', 'def')
    map.set('4', 'ghi')
    map.set('5', 'jkl')
    map.set('6', 'mno')
    map.set('7', 'pqrs')
    map.set('8', 'tuv')
    map.set('9', 'wxyz')

    let group: string[] = []
    let res: string[] = []
    backtracking(digits, 0, map, group, res)

    return res
}