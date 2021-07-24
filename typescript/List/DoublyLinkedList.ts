
export class DoublyLinkedListNode<T>{
    public next: DoublyLinkedListNode<T> = null
    public prev: DoublyLinkedListNode<T> = null
    constructor(public value){ };
}

export class DoublyLinkedList<T>{

    head:DoublyLinkedListNode<T> = null;
    tail:DoublyLinkedListNode<T> = null;

    public append(value: T){
        const node = new DoublyLinkedListNode(value);
        if(!this.head){
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        return this;
    }

    public prepend(value : T){
        const node = new DoublyLinkedListNode(value);
        if(!this.head){
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        return this;
    }

    remove(value : T){
        const node = this.find(value);
        if(!node){ return null;}
        node.prev.next = node.next;
        node.next = null;
        node.prev = null;
        node.value = null;
        return this;
    }

    find(value : T) : DoublyLinkedListNode<T>{
        let currentNode = this.head;
        while(currentNode.value) {
            if(currentNode.value != value){
                currentNode = currentNode.next;
            } else {
                return currentNode
            }
        }
        return null;
    }
}