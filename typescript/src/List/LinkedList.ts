
class LinkedListNode<T> {
    constructor(
        
        public value: T, 
        // next node
        public next: LinkedListNode<T> = null ){ };
}
export class LinkedList<T>{
    head:LinkedListNode<T> = null;
    tail:LinkedListNode<T> = null;
    count = 0;

    public prepend(value:T){
        this.count++

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
        this.count++

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

    public remove(value : T): LinkedListNode<T>{
        // console.log(this.tail)
        if(this.head.value == value){
            const toRemoveNode = JSON.parse(JSON.stringify(this.head))

            if(!this.head.next){
                this.head = null;
                this.tail = null
            } else {
                this.head = this.head.next
            }
            this.count--;
            return toRemoveNode;
        }

      

        let currentNode = this.head;
        let lastNode = this.head;
        while(currentNode.value){
            // console.log(currentNode)
            if(currentNode.value != value){
                lastNode = currentNode;
                currentNode = currentNode.next;
                // console.log("lastNode",lastNode)
                // console.log({currentNode}, {lastNode})
            } else {

                // console.log('rere')
                if(this.tail == currentNode){
                    this.tail = lastNode;
                    // console.log('yes', this.tail)
                } else {
                    
                    lastNode.next = currentNode.next;
                    
                }
                // console.log(this.tail)
                const toRemoveNode = JSON.parse(JSON.stringify(currentNode))
                currentNode.next = null;
                currentNode.value = null;
                // console.log(this.tail)
                return toRemoveNode;
            }
            
        }
        return null;


    }


    public find(value : T|string, callbackFunction?: (value: any) => boolean) : LinkedListNode<T>{
        if(!this.head){
            return undefined;
        }
        
        let currentNode = this.head;

        do{  
            if(callbackFunction){
                const node = this.findWithCallback(currentNode, callbackFunction);
                if(node){
                    return node;
                }
            } else {

                if(currentNode.value != value){
                    currentNode = currentNode.next;
                } else {
                    return currentNode;
                }
            }
        } while((currentNode.next));
        return;
    }
    
    private findWithCallback(currentNode : LinkedListNode<T>, callbackFunction:(value: any) => boolean) : LinkedListNode<T>{
       
            if(!callbackFunction(currentNode.value)){
                currentNode = currentNode.next;
            } else {
                return currentNode;
            }
            return null
        
    }
}