/**
 * 验证ip地址(牛客网)
 * @param IP ip4或ip6字符串
 * @returns 
 */
export function solve(IP: string): string {
    if (!IP || IP.length == 0) return 'Neither'

    if (IP.indexOf('.') >= 0) {
        let arr = IP.split('.')
        if (arr.length != 4) return 'Neither'
        if (arr.findIndex(str => str.startsWith('0')) >= 0) return 'Neither'
        if (arr.map(str => Number(str)).findIndex(n => Number.isNaN(n) || n < 0 || n > 255) >= 0) return 'Neither'
        return 'IPv4'
    } else {
        let arr = IP.split(':')
        if (arr.length != 8) return 'Neither'
        if (arr.findIndex(str => str.length > 4) >= 0) return 'Neither'
        if (arr.map(str => Number(`0x${str}`)).findIndex(n => Number.isNaN(n) || n < 0 || n > 0xffff) >= 0) return 'Neither'
        return 'IPv6'
    }
}
