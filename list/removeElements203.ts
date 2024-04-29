import { ListNode } from "./ListNode"


function removeElements203(head: ListNode | null, val: number): ListNode | null {
    let dummyHead = new ListNode(0, head)

    let prev: ListNode | null = dummyHead, cur: ListNode | null = dummyHead.next
    while (prev && cur) {
        if (cur.val == val) {
            prev.next = cur.next
        } else {
            prev = cur
        }
        cur = cur.next
    }

    return dummyHead.next
}