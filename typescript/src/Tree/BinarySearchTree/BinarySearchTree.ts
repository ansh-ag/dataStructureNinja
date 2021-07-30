import { Stack } from "../../Stack/Stack";
import { BSTNode } from "./BSTNode";
// import { TreeNode } from "../TreeNode";



export class BinarySearchTree<T>{
    
    public parentNode = new BSTNode<T>();
    
    insert(value: T){
        if(!this.parentNode.value){
            this.parentNode.value = value;
            return this;
        }

        const node = this.parentNode.insert(value)
        return node;
    }

    remove(value: T){
        // let currentNode
        return this.parentNode.remove(value);
    }

    inOrderPrint(node?:BSTNode<T>){
        if(!node){
            node = this.parentNode;
        }
        if(node.left){
            this.inOrderPrint(node.left);
        }
        
        console.log(node.value)

        if(node.right){
            this.inOrderPrint(node.right)
        }
    }

    
    // same with iteration
    inOrderPrintWithIterate(){
        let stack = new Stack<BSTNode<T>>()
        let currNode = this.parentNode
        while(currNode || stack.count > 0){
            
            while(currNode){
                stack.push(currNode);
                currNode = <any>currNode.left
            }
            currNode = stack.pop();
            
            console.log(currNode.value);
            
            currNode = <any>currNode.right;
        }
    }
}