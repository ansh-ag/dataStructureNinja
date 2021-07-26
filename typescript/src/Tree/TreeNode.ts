export class TreeNode<T>{
    private _left: TreeNode<T>;
    private _right: TreeNode<T>;
    private _parent:  TreeNode<T>;
    constructor(private _value: T = null){}

    
    get value(): T {
        return this._value
    }
    set value(val){
        this._value = val;
    }


    set left(node: TreeNode<T>){
        // current left node, if there is one, needs to be detached.
        // current node is not the parent anymore
        if(this._left){
            this._left.parent = null;
        }
        this._left = node
        if(this._left){
            this._left.parent = this;
        }
    }
    get left(){
        return this._left
    }
    
    
    set right(node: TreeNode<T>){
        // current right node, if there is one, needs to be detached.
        // current node is not the parent anymore
        if(this._right){
            this._right.parent = null;
        }
        this._right = node
        if(this._right){
            this._right.parent = this;
        }
    }
    get right(){
        return this._right
    }


    set parent(node: TreeNode<T>){
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