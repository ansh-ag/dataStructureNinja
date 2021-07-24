
class LinkedListNode {
    constructor(
        
        public value, 
        // next node
        public next: LinkedListNode = null ){ };
}
export class LinkedList<T>{
    head:LinkedListNode = null;
    tail:any = null;

    public prepend(value:T){
        // create a linkedList Object
        const listNode = new LinkedListNode(value);
        // no head, when running for the first time
        if(!this.head){
            this.head = listNode;
            this.tail = listNode;
            
            // return the linkedList Object after appending
            return this;
        }

        // if there is already a head, we need to make our node the new head
        listNode.next = this.head;
        this.head = listNode;
        return this;
    }


    public append(value:T){
         // create a linkedList Object
         const listNode = new LinkedListNode(value);
         // no head, when running for the first time
         if(!this.head){
             this.head = listNode;
             this.tail = listNode;
             
             // return the linkedList Object after appending
             return this;
         }

        // if there is a head, we need make our node the new tail
        
        this.tail.next = listNode;
        // keep the tail instance for ref 
        this.tail = listNode;
        return this;

    }
}