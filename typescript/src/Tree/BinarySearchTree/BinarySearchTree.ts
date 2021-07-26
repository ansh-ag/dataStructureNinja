import { Stack } from "../../Stack/Stack";
import { TreeNode } from "../TreeNode";



export class BinarySearchTree<T>{
    
    public parentNode = new TreeNode<T>(null, null);
    
    add(value: T){
        if(!this.parentNode.value){
            this.parentNode.value = value;
            // this.parentNode.parent = this.parentNode
            return this;
        }

        const node = this.parentNode.compare(value,  this.parentNode)
        return node;
    }

    remove(value: T){
        // let currentNode
    }

    inOrderPrint(node?:TreeNode<T>){
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
        let stack = new Stack<TreeNode<T>>()
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