import { BinarySearchTree } from "../BinarySearchTree/BinarySearchTree";
import { TreeNode } from "../TreeNode";



export class AVLTree<T> extends BinarySearchTree<T> {

    // get getLeft(): TreeNode<T>{
    //     return t
    // }


    add(value: T){

        const newN = super.add(value)     
        let node = this.parentNode.find(value);
        while(node){
            this.balance(node);
            node = node.parent
        }
        return newN;

    }

    balance(node: TreeNode<T>){
        // console.log('d', node.balanceFactor)

        if(node.balanceFactor > 1){

            if(node.left.balanceFactor > 0){
                // console.log('d')
                this.rotateLeftLeft(node)
            } else if(node.left.balanceFactor < 0){

            }
        } else if(node.balanceFactor < -1){
            if(node.right.balanceFactor < 0){

            } else if(node.right.balanceFactor > 0){

            }

        } else {

        }
    }


    rotateLeftLeft(node : TreeNode<T>){
        const leftNode = node.left;
        node.left = null
        
        if(node.parent){
            node.parent.left = leftNode;
        } else if(this.parentNode == node){
            this.parentNode = leftNode;
        }
        
        if(leftNode.right){
            node.left = leftNode.right
        }

        leftNode.right = node;


    }

}