
import { LinkedList } from "../List/LinkedList";

export class Queue <T>{
    private list:LinkedList<T> = new LinkedList()

    peek(){
        return this.list.head.value;
    }

    enqueue(value: T){
        this.list.append(value);
    }

    dequeue(value: T){
        return this.list.remove(value).value || null;
    }
    
}