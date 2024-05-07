import { ListNode } from "./ListNode"

/**
 * 链表指定区间反转(牛客网)
 * @param head 
 * @param m 
 * @param n 
 */
export function reverseBetween(head: ListNode, m: number, n: number): ListNode | null {
    if (!head) return null

    let dummy = new ListNode(-1, head)
    let a: ListNode | null = dummy, prev: ListNode | null = null, p: ListNode | null = null
    for (let i = 1; i < m; i++) {
        if (a) a = a.next
    }
    if (a) prev = a.next
    if (prev) p = prev.next

    for (let i = 1; i <= n - m; i++) {
        if (prev && p) prev.next = p.next
        if (a && p) p.next = a.next
        if (a) a.next = p
        if (prev) p = prev.next
    }

    return dummy.next
}

{
    let n5 = new ListNode(5, null)
    let n4 = new ListNode(4, n5)
    let n3 = new ListNode(3, n4)
    let n2 = new ListNode(2, n3)
    let n1 = new ListNode(1, n2)

    let res = reverseBetween(n1, 2, 4)
    for (let p: ListNode | null = res; p != null; p = p.next) {
        console.log(p.val)
    }
}