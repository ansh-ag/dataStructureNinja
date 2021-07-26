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


    remove(value : T){
        const nodeToRemove = this.find(value);
        if(!nodeToRemove){
            return false;
        }

        const {parent} = nodeToRemove;
        if(!nodeToRemove.left && !nodeToRemove.right){
            if(parent){
                parent.removeChild(nodeToRemove);
            } else {
                nodeToRemove.value = undefined;
            }

        } else if(nodeToRemove.left && nodeToRemove.right){
            const nextBiggestNode =  (<BSTNode<T>> nodeToRemove.right).findMin();
            if (nextBiggestNode == nodeToRemove.right) {
                this.remove(nextBiggestNode.value);
            } else {
                nodeToRemove.value = nodeToRemove.right.value
                nodeToRemove.right = nodeToRemove.right.right
            }

        } else {
            const childNode = nodeToRemove.right || nodeToRemove.left;
            if(parent){
                parent.replaceNode(nodeToRemove, childNode);
            } else {
                TreeNode.copyNode(childNode, nodeToRemove);
            }
            nodeToRemove.parent=null;
            return this;
        }

    }

    findMin(){
        if(!this.left){
            return this;
        }
        (<BSTNode<T>>this.left).findMin()
    }
}