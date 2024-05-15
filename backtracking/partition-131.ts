/**
 * 分割问题：分割回文串
 */
function isPalindrome(str: string): boolean {
    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
        if (str[i] != str[j]) return false
    }
    return true
}

function backtracking131(s: string, startIndex: number, group: string[], res: string[][]) {
    if (startIndex == s.length) {
        res.push([...group])
        return
    }

    for (let i = startIndex; i < s.length; i++) {
        let sub = s.substring(startIndex, i + 1)
        if (!isPalindrome(sub)) continue

        group.push(sub)
        backtracking131(s, i + 1, group, res)
        group.pop()
    }
}

function partition(s: string): string[][] {
    let group: string[] = []
    let res: string[][] = []
    backtracking131(s, 0, group, res)

    return res
}