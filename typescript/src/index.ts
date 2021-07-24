import { LinkedList } from './List/LinkedList';


/**
 * 
 * Linked List working example
 * 
 */
const linkedList = new LinkedList()


// linkedList.append("B");
// linkedList.append("C");

// linkedList.prepend("A");

// console.log(JSON.stringify(linkedList.head))




/**
 * 
 * HashTable working example
 * 
 */
import { HashTable } from './HashTable/HashTable';

const m = new HashTable<any>()
m.set("ssad", {"asd":"kjjn"});
m.set("as", 8797798);
m.set("ssaad", ["njknj","njknjknkjnjnj"]);


console.log(m.get('ssad'))
