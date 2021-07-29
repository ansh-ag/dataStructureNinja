import { Stack } from "../../Stack/Stack";
import { BSTNode } from "./BSTNode";
// import { TreeNode } from "../TreeNode";



export class BinarySearchTree<T>{
    
    public parentNode = new BSTNode<T>();
    
    insert(value: T){
        if(!this.parentNode.value){
            this.parentNode.value = value;
            // this.parentNode.parent = this.parentNode
            return this;
        }

        const node = this.parentNode.insert(value)
        return node;
    }

    remove(value: T){
        // let currentNode
    }

    inOrderPrint(node?:BSTNode<T>){
        if(!node){
            node = this.parentNode;
        }
    // const closureFun = (node:BinarySearchTreeNode<T>)=>{
        if(node.left){
            this.inOrderPrint(<any>node.left);
        }
        
        console.log(node.value)

        if(node.right){
            this.inOrderPrint(<any>node.right)
        }
    }

    
    inOrderIterate(){
        // same with iteration
        let stack = new Stack<BSTNode<T>>()
        let currNode = this.parentNode
        while(currNode || stack.count > 0){
            
            while(currNode){
                stack.push(currNode);
                currNode = <any>currNode.left
                // continue;
                // stack.push(c)
            }
            // console.log(stack, stack.count)
            // console.log('dddd', currNode)
            currNode = stack.pop();
            
            console.log(currNode.value);
            
            currNode = <any>currNode.right;
        }
    }
}