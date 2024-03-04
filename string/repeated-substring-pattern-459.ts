function repeatedSubstringPattern(s: string): boolean {
    for (let subLength = s.length >> 1; subLength >= 1; subLength--) {
        if (s.length % subLength != 0) continue

        let res = true
        let subNum = s.length / subLength
        for (let i = 0; i < subNum - 1; i++) {
            let str1 = s.substring(i * subLength, (i + 1) * subLength)
            let str2 = s.substring((i + 1) * subLength, (i + 2) * subLength)
            if (str1 != str2) {
                res = false
                break
            }
        }

        if (res) return true
    }

    return false
}