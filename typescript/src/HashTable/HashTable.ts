import { LinkedList } from "../List/LinkedList";

const DefaultSize = 32;

export class HashTable<T> {
    private bucket:Array<LinkedList<{key:string, value:T}>>;
    private keys = {};
    constructor(size = DefaultSize){
        // array of linkedList
        this.bucket = Array(size).fill(null).map(()=>(new LinkedList()))
        this.keys = {}
    }  
    
    private hash(key:string){
        const hash:number = Array.from(key).reduce(
            (hashAccumulator:number, keySymbol:any) => (hashAccumulator + keySymbol.charCodeAt(0)),
            0,
          );
        // const hash = Array.from(key).reduce((hashAccumilator, keySymbol:any) => (hashAccumilator + keySymbol.charCodeAt(0)),0)
        return hash % this.bucket.length;
    }

    public set(key:string, value:T){
        // console.log('key', key)
        const idx = this.hash(key);
        // console.log(idx)

        const linkedListBucket = this.bucket[idx];
        // console.log( this.bucket)

        const node = linkedListBucket.find(key, ((currentValue)=> currentValue.key == key) )
        
        if(!node){
            linkedListBucket.append({key, value})
        } else {
            node.value.value = value;
        }

    }

    public get(key:string){
        const idx = this.hash(key);
        const linkedListBucket = this.bucket[idx];
        const node = linkedListBucket.find(key, (currentValue)=> currentValue.key == key )
        if(node){
            return node.value.value
        }
        return undefined;
    }

    public delete(key:string){
        const idx = this.hash(key);
        const linkedListBucket = this.bucket[idx];
        const node = linkedListBucket.find(key, (currentValue)=> currentValue.key == key )
        // console.log(linkedListBucket);

        linkedListBucket.remove(node.value)
        // console.log(linkedListBucket);
        // node.
    }

}


