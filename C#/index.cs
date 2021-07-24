using System;

namespace dataStructures
{
    class Program
    {
        static void Main(string[] args)
        {
            var newLinkedList = new LinkedList<string>();
            newLinkedList.append("Hellow");
            newLinkedList.append("world");
            newLinkedList.append("world1");
            newLinkedList.append("world2");
            
            newLinkedList.remove("Hellow");

            Console.WriteLine(newLinkedList.tail);
        }
    }
}
