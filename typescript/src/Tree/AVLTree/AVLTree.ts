import { BinarySearchTree } from "../BinarySearchTree/BinarySearchTree";
import { BSTNode } from "../BinarySearchTree/BSTNode";

export class AVLTree<T> extends BinarySearchTree<T>{

   
    insert(value:T){
        const newNode = super.insert(value);
        // after insertion, we need to balance the tree

        
        let currentNode = this.parentNode.find(value);
        while(currentNode){
            this.balance(currentNode);
            currentNode = currentNode.parent
        }


        return newNode;

    }

    private balance(node: BSTNode<T>){
        const bFactor = node.balanceFactor;
        if(bFactor > 1){
            const leftBFactor = node.left.balanceFactor;
            if(leftBFactor > 0){
                this.leftLeftRotation(node);
            }
            // do left left rotation
        }
    }

    private leftLeftRotation(node : BSTNode<T>){
        // detach the left node
        const leftNode = node.left
        node.left = null;
        
        if(node.parent){
            node.parent.left = leftNode;
            leftNode.parent = node.parent;
            node.parent = leftNode
        } else {
            this.parentNode = leftNode
        }

        if(leftNode.right){
            node.left = leftNode.right
        }

        leftNode.right = node;
    }

}