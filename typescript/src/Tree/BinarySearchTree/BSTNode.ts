import { TreeNode } from "../TreeNode";

export class BSTNode<T> extends TreeNode<BSTNode<T>, T>{
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
                return  this.right.insert(value);
            } else {
                const node = new BSTNode<T>(value);
                this.right = node;
                return this.right
            }
            
        } else if(this.value > value){
            if(this.left){
                return this.left.insert(value);
            }else{
                const node = new BSTNode<T>(value);
                this.left = node;
                return this.left
            }
        } else {
                this.value = value
                return this;
        }

    }

    /**
     * node
     */
    find(value : T): BSTNode<T>{
        if(this.left && value < this.value){
            return this.left.find(value)
        } else if(this.right && value > this.value){
            return   this.right.find(value)
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
            const nextBiggestNode =  nodeToRemove.right.findMin();
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
        this.left.findMin()
    }
}
