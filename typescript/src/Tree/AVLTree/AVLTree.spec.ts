import { AVLTree } from "./AVLTree";

describe("AVL Tree cases :",()=>{
    const tree = new AVLTree();

    it("should insert a new node", ()=>{
        tree.insert(5);
        expect(tree.parentNode.value).toEqual(5);
        tree.insert(2);
        expect(tree.parentNode.left.value).toEqual(2);
        tree.insert(8);
        expect(tree.parentNode.right.value).toEqual(8);
    })

    it("should do a left left rotation on parent",()=>{
        /**
         * let's say there are three nodes 
         * C <- B <- A, this should now be C <- B -> A
         */

        // 1 <- 3 <- 5
        tree.insert(5);
        tree.insert(3);
        tree.insert(1)
        
        //if balanced, should be 1 <- 3 -> 5
        expect(tree.parentNode.value).toEqual(3);



    })
    it("should do a left left rotation on child",()=>{
        /**
         * let's say there are four nodes 
         * C <- B <- A <-X, this should now be C <- B -> A, where B <- X
         */

        // 1 <- 3 <- 5 <- 8
        tree.insert(8);
        tree.insert(5);
        tree.insert(3);
        tree.insert(1);
        
        //if balanced, should be 1 <- 3 -> 5, where 3 <- 8
        expect(tree.parentNode.value).toEqual(8);
        expect(tree.parentNode.left.value).toEqual(3);
        expect(tree.parentNode.left.right.value).toEqual(5);

    })
})