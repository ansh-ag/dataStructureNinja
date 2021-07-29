import exp = require("constants");
import { BSTNode } from "./BSTNode";

describe("Binary Search Tree Node test cases :", ()=>{

    it("should create a new empty BST Node",()=>{
        const node = new BSTNode<number>()
        expect(node).toBeTruthy();
    })

    it("should create a new BST Node with value", ()=>{
        const node = new BSTNode<number>(10);
        expect(node.value).toEqual(10);
    })

    it("should insert into the currect node, in a tree", ()=>{
        const node = new BSTNode<number>(10);
        node.insert(5)
        expect(node.left.value).toEqual(5)

        node.insert(15)
        expect(node.right.value).toEqual(15);

        node.insert(3);
        expect(node.left.left.value).toEqual(3)
    })

    it("should find the node by value", ()=>{
        const node = new BSTNode<number>(10);

        
        expect(node.find(10).value).toEqual(10)

        // const myNode = node.insert(5)
        // expect(myNode.find(5)).toEqual(myNode);

        // expect(node.find(6)).toBeNull();
    })


    it("should remove the node by value",()=>{
        const node = new BSTNode<number>(10);
        node.insert(5);
        node.insert(15);

        node.remove(5);
        expect(node.left).toBeNull();
        
        // node.remove(10);
        // expect(node).toBeNull();

        node.insert(5);
        node.insert(3);
        node.insert(2);

        node.remove(3);
        expect(node.left.left.value).toEqual(2)
    })
});