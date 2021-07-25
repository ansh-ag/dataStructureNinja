import { Stack } from "../../Stack/Stack";

export class BinarySearchTreeNode<T>{
    public right: BinarySearchTreeNode<T> = null;
    public left: BinarySearchTreeNode<T> = null;

    constructor(public value: T){}
    compare(value: T): BinarySearchTreeNode<T>{
        if(value > this.value){
            if(this.right){
                return this.right.compare(value)
            } else {
                 this.right = new BinarySearchTreeNode(value)
                 return this.right;
            }
        } else if(value < this.value) {
            if(this.left){
                return this.left.compare(value)
            } else {
                 this.left = new BinarySearchTreeNode(value)
                 return this.left
            }
        } else {
            return this;
        }
    }

}

export class BinarySearchTree<T>{
    
    private parentNode = new BinarySearchTreeNode<T>(null);
    
    add(value: T){
        if(!this.parentNode.value){
            this.parentNode.value = value;
            return this;
        }

        const node = this.parentNode.compare(value)
        return node;
    }

    remove(value: T){
        // let currentNode
    }

    inOrderPrint(node?:BinarySearchTreeNode<T>){
        if(!node){
            node = this.parentNode;
        }
    // const closureFun = (node:BinarySearchTreeNode<T>)=>{
        if(node.left){
            this.inOrderPrint(node.left);
        }
        
        console.log(node.value)

        if(node.right){
            this.inOrderPrint(node.right)
        }
    }

    
    inOrderIterate(){
        // same with iteration
        let stack = new Stack<BinarySearchTreeNode<T>>()
        let currNode = this.parentNode
        while(currNode || stack.count > 0){
            
            while(currNode){
                stack.push(currNode);
                currNode = currNode.left
                // continue;
                // stack.push(c)
            }
            // console.log(stack, stack.count)
            // console.log('dddd', currNode)
            currNode = stack.pop();
            
            console.log(currNode.value);
            
            currNode = currNode.right;
        }
    }
}