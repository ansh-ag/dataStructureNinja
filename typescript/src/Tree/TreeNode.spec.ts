import { TreeNode } from "./TreeNode"

describe("Tree Node test cases:", ()=>{
    it("should create an empty TreeNode",()=>{
        const node = new TreeNode();
        expect(node).toBeTruthy();
    })

    it("should create a TreeNode with a value",()=>{

        const nodeNumber = new TreeNode(50)
        expect(nodeNumber.value).toEqual(50);

        const nodeString = new TreeNode("something");
        expect(nodeString.value).toEqual("something");

        const nodeArr = new TreeNode([1,2,46]);
        expect(nodeArr.value[1]).toEqual(2);

    })

    it("should set and fetch the left node",()=>{
        const node = new TreeNode<number, TreeNode<number, any>>(50);
        
        node.left = new TreeNode(100);
        expect(node.left.value).toEqual(100);

        node.left.left = new TreeNode(10);
        expect(node.left.left.value).toEqual(10);

    })

    it("should set and fetch the right node",()=>{
        const node = new TreeNode<number, TreeNode<number, any>>(50);
        
        node.right = new TreeNode(100);
        expect(node.right.value).toEqual(100);

        node.right.right = new TreeNode(10);
        expect(node.right.right.value).toEqual(10);
    })

    it("should save the node as the parent node",()=>{
        const node = new TreeNode<number, TreeNode<number, any>>(50);
        
        node.right = new TreeNode(100);
        expect(node.right.parent.value).toEqual(50);

        node.left = new TreeNode(110);
        expect(node.left.parent.value).toEqual(50);
    })


    it("should return a valid balance factor",()=>{

        const node = new TreeNode<number, TreeNode<number, any>>(10);
        node.left = new TreeNode(100);
        node.left.left = new TreeNode(1000);
        expect(node.balanceFactor).toEqual(2)

        node.left.left.right = new TreeNode(120);
        expect(node.balanceFactor).toEqual(3)

        node.left.left.right.left = new TreeNode(110);
        expect(node.balanceFactor).toEqual(4)

        node.right =  new TreeNode(90);
        expect(node.balanceFactor).toEqual(3)

        node.right.left =  new TreeNode(80);
        expect(node.balanceFactor).toEqual(2)

        node.right.left.right =  new TreeNode(70);
        expect(node.balanceFactor).toEqual(1)

        node.right.left.right = null;
        expect(node.balanceFactor).toEqual(2)

        node.right = null;
        expect(node.balanceFactor).toEqual(4)
    })


    it('should remove child node by value',()=>{
        const node = new TreeNode(10);
        node.right = new TreeNode(15)
        node.left = new TreeNode(5)

        node.removeChild(node.left);

        expect(node.left).toBeNull();

        node.removeChild(node.right);

        expect(node.right).toBeNull();

    })

})