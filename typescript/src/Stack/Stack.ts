
import { LinkedList } from "../List/LinkedList";

export class Queue <T>{
    private list:LinkedList<T> = new LinkedList()

    peek(){
        return this.list.head.value;
    }

    push(value: T){
        this.list.prepend(value);
    }

    pop(value: T){
        return this.list.remove(value).value || null;
    }
    
}