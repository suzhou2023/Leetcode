import { ListNode } from "./ListNode"

/**
 * 链表相加（牛客网）
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param head1 ListNode类 
 * @param head2 ListNode类 
 * @return ListNode类
 */
export function addInList(head1: ListNode | null, head2: ListNode | null): ListNode | null {
    // write code here
    if (!head1) return head2
    if (!head2) return head1

    head1 = reverseList(head1)
    head2 = reverseList(head2)

    let p: ListNode | null = head1, q: ListNode | null = head2, carry = 0 // 进位
    while (p && q) {
        let r = p.val + q.val + carry
        p.val = r % 10
        carry = Math.floor(r / 10)

        // 下面3行代码自我感觉不错
        if (!p.next && !q.next) break
        if (!p.next) p.next = new ListNode(0, null)
        if (!q.next) q.next = new ListNode(0, null)

        p = p.next
        q = q.next
    }

    if (carry != 0 && p) {
        p.next = new ListNode(1, null)
    }

    return reverseList(head1)
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null
    let prev = head, cur = prev.next
    while (cur) {
        prev.next = cur.next
        cur.next = head
        head = cur
        cur = prev.next
    }

    return head
}
