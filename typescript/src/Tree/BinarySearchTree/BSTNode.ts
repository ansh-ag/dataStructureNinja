import { TreeNode } from "../TreeNode";

export class BSTNode<T> extends TreeNode<T>{
    constructor(value: T = null, ){
        super(value)
    }

/**
 * 
 * @param value Value to be inserted to the tree
 * @returns returns the node in which the item was added.
 */
    insert(value: T): BSTNode<T>{
        if(this.value < value){
            if(this.right){
                return (<BSTNode<T>> this.right).insert(value);
            }
            const node = new BSTNode<T>(value);
            this.right = node;
            
        } else if(this.value > value){
            if(this.left){
                return (<BSTNode<T>> this.left).insert(value);
            }
            const node = new BSTNode<T>(value);
            this.left = node;
        } else {
                this.value = value
        }
        
        return this;

    }

    /**
     * node
     */
    find(value : T): BSTNode<T>{
        if(value < this.value){
            return  (<BSTNode<T>> this.left).find(value)
        } else if(value > this.value){
            return  (<BSTNode<T>> this.right).find(value)
        } else if(value == this.value){
            return this;
        }
        return null;
    }

    contains(value : T): boolean {
        return !!this.find(value);
    }
}