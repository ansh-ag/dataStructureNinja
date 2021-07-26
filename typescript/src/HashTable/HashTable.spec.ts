import { HashTable } from "./HashTable";

describe("Hash Table Cases:", ()=>{

    it("should create a hash table",() => {
    
        const hash = new HashTable<number>();
       
        expect(hash).toBeTruthy();
    
    })

    it("should set items to hash table", () => {
        
        const hash = new HashTable<string>();
        hash.set("name", "Pikachu")

        expect(hash.get("nam")).toBeUndefined();
        
        expect(hash.get("name")).toBe("Pikachu");
        
    })


})