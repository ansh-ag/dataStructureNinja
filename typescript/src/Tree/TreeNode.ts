
export class TreeNode <T, N extends TreeNode<T, N>>  {
    public _left: N;
    private _right: N;
    private _parent: N;
    constructor(private _value: T = null){}

    
    get value(): T {
        return this._value
    }
    set value(val){
        this._value = val;
    }


    set left(node:N){
        // current left node, if there is one, needs to be detached.
        // current node is not the parent anymore
        if(this._left){
            this._left.parent = null;
        }
        this._left = node
        if(this._left){
           (<TreeNode<T,N>> this._left.parent ) = this;
        }
    }
    get left(){
        return this._left
    }
    
    
    set right(node:  N){
        // current right node, if there is one, needs to be detached.
        // current node is not the parent anymore
        if(this._right){
            this._right.parent = null;
        }
        this._right = node
        if(this._right){
            (<TreeNode<T,N>> this._right.parent ) = this;
        }
    }
    get right(){
        return this._right
    }


    set parent(node:  N){
        this._parent = node;
    }
    get parent(){
        return this._parent;
    }



    get leftHeight(){
        if(!this.left) return 0;
        return this.left.height+1;
    }
    get rightHeight(){
        if(!this.right) return 0;
        return this.right.height+1;
    }
    get height(): number {
        return Math.max(this.leftHeight, this.rightHeight)
    }
    get balanceFactor(): number {
        return this.leftHeight-this.rightHeight;
    }


    removeChild(node:  N) :boolean{
        if(this.left && this.left == node){
            this.left = null;
        } else if(this.right && this.right == node){
            this.right = null;
        } else {
            return false;
        }
        return true
    }

    replaceNode(fromNode:  N, toNode:  N){
        if(!fromNode || !toNode){
            return false
        }

        if(this.left && this.left == fromNode){
            this.left = toNode;
            return true
        }
        if(this.right && this.right == fromNode){
            this.right = toNode;
            return true
        }
        return false;
    }

    static copyNode(sourceNode: any, targetNode:  any){
        targetNode.value = sourceNode.value;
        targetNode.left = sourceNode.left;
        targetNode.right = sourceNode.right;
        
    }

}







// export class TreeNode<T>{
//     public right: TreeNode<T> = null;
//     public left: TreeNode<T> = null;
//     constructor(public value: T, public parent: TreeNode<T>){}
//     compare(value: T, parentNode: TreeNode<T>): TreeNode<T>{
//         if(value > this.value){
//             if(this.right){
//                 return this.right.compare(value, this.parent)
//             } else {
//                  this.right = new TreeNode(value, parentNode)
//                  return this.right;
//             }
//         } else if(value < this.value) {
//             if(this.left){
//                 return this.left.compare(value, this.parent)
//             } else {
//                  this.left = new TreeNode(value, parentNode)
//                  return this.left
//             }
//         } else {
//             return this;
//         }
//     }

//     find(value : T): TreeNode<T>{
//         // check root
//         if(this.value == value){
//             return this;
//         }
//         if(this.value < value && this.left){
//             return this.left.find(value);
//         }
//         if(this.value > value && this.right){
//             return this.right.find(value);
//         }
//         return null;

//     }


//     get balanceFactor(){
//         return this.leftHeight - this.rightHeight
//     }

//     get leftHeight(){
//         // console.log()
//         if(!this.left){
//             return 0
//         }
//         return this.left.height + 1
//     }

//     get rightHeight(){
//         if(!this.right){
//             return 0
//         }
//         return this.right.height + 1
//     }

//     get height():number {
//         return Math.max(this.leftHeight, this.rightHeight);
//       }

// }

