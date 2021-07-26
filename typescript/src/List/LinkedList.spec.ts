import {LinkedList} from './LinkedList';
describe("Linked List Cases : ", ()=> {
  // For storing UserService instance
  
  // linkedList.append("B");
  // linkedList.append("C");
  
  // linkedList.prepend("A");
  // console.log(JSON.stringify(linkedList.head))
    it('should have a head', () => {
        let list = new LinkedList<string>();
        list.append("B")
        expect(list.head.value).toEqual("B");
    });
    it('should have a tail', () => {
        let list = new LinkedList<string>();
        list.append("B")
        expect(list.tail.value).toEqual("B");
    });

    it("should append and change the tail", ()=>{
        let list = new LinkedList<string>();
        list.append("B")
        expect(list.tail.value).toEqual("B");
    })

    it("should prepend and change the head", ()=>{
        let list = new LinkedList<string>();
        list.prepend("B")
        list.prepend("A")
        // console.log(list)
        expect(list.head.value).toEqual("A");
    })

    it("should increment count when adding items", ()=>{
        let list = new LinkedList<number>();
        list.append(1)
        list.append(2)
        list.append(3)
        list.append(4)
        list.append(5)

        expect(list.count).toEqual(5);

    })

})