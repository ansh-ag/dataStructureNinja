import { BinarySearchTree } from "./BinarySearchTree"

describe("Binary Search Tree test cases :", ()=>{

    it("should create a binary tree with child nodes",()=>{
        const node = new BinarySearchTree<number>();
        node.insert(10);
        node.insert(5);
        node.insert(15);
        expect(node.parentNode.value).toEqual(10);
    })
})