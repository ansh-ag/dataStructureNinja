
import { LinkedList } from "../List/LinkedList";

export class Stack <T>{
    private list:LinkedList<T> = new LinkedList();
    
    public get count(){
        return this.list.count;
    }

    peek(){
        return this.list.head.value;
    }

    push(value: T){
        this.list.prepend(value);
    }

    pop(){
        // console.log("POP")
        // value = value ? value : this.list.tail.value
        // console.log(this.list.head.value)
        let node =this.list.remove(this.list.head.value)
        
        // console.log('node', node)
        return  node.value || null;
    }
    
}