import { ListNode } from "./ListNode"

class MyLinkedList707 {
    h: ListNode // 虚拟头结点

    constructor() {
        this.h = new ListNode(-1, null)
    }

    dump() {
        let p: ListNode | null = this.h
        while (p) {
            p = p.next
            console.log(p?.val)
        }
    }

    get(index: number): number {
        if (index < 0) return -1

        let p: ListNode | null = this.h
        for (let i = 0; i <= index; i++) {
            if (!p) return -1
            p = p.next
        }

        return p ? p.val : -1
    }

    addAtHead(val: number): void {
        let node = new ListNode(val, this.h.next)
        this.h.next = node
    }

    addAtTail(val: number): void {
        let p = this.h
        while (p.next) {
            p = p.next
        }
        p.next = new ListNode(val, null)
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0) return

        let p: ListNode | null = this.h
        for (let i = 0; i < index; i++) {
            if (!p) return
            p = p.next
        }

        if (p) {
            p.next = new ListNode(val, p.next)
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0) return

        let p: ListNode | null = this.h
        for (let i = 0; i < index; i++) {
            if (!p) return
            p = p.next
        }

        if (p && p.next) {
            p.next = p.next.next
        }
    }
}


{
    let list = new MyLinkedList707()
    // list.dump()
    list.addAtHead(1)
    list.addAtTail(3)
    list.addAtIndex(1, 2)
    list.dump()
    console.log(list.get(1))
    list.deleteAtIndex(1)
    list.dump()
    console.log(list.get(1))
}