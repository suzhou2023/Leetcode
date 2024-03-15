function isValidIpNum(str: string): boolean {
    if (str == '0') return true
    if (str.startsWith('0')) return false
    if (str.length > 3) return false

    let padStr = str.padStart(3, '0')
    return padStr > '000' && padStr <= '255'
}


function backtracking93(s: string, startIndex: number, group: string[], res: string[]) {
    if (group.length == 4) {
        if (startIndex < s.length) return
        res.push(group.join('.'))
        return
    }

    // 剪枝
    for (let i = startIndex; i < startIndex + 3 && i < s.length; i++) {
        let sub = s.substring(startIndex, i + 1)
        if (!isValidIpNum(sub)) continue

        group.push(sub)
        backtracking93(s, i + 1, group, res)
        group.pop()
    }
}


function restoreIpAddresses(s: string): string[] {
    let group: string[] = []
    let res: string[] = []
    backtracking93(s, 0, group, res)

    return res
}


{
    let res = restoreIpAddresses('25525511135')
    console.log(res)
}