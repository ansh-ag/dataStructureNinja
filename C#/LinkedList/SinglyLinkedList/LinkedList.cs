using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dataStructures
{
    class LinkedListNode<T>
    {
        public T value { get; set; }
        public LinkedListNode<T> next { get; set; }
    };
    class LinkedList<T>
    {
       
        public LinkedListNode<T> head { get;  set; }
        public LinkedListNode<T> tail { get;  set; }

        public LinkedList<T> prepend(T value)
        {
            var node = new LinkedListNode<T> { value = value };

            if(head == null)
            {
                head = node;
                tail = node;
             

            } else
            {
                node.next = head;
                head = node;
            }
            return this;
        }

        public LinkedList<T> append(T value)
        {
            var node = new LinkedListNode<T> { value = value };

            if (head == null)
            {
                head = node;
                tail = node;
            }
            else
            {
                tail.next = node;
                tail = node;
            }
            return this;
        }

        public LinkedList<T> remove(T value)
        {
            var lastNode = head;
            var currentNode = head;

            if(head.value.Equals(value))
            {
                head = head.next;
                return this;
            }


            while (!currentNode.next.Equals(null)) 
            {
                if (object.Equals(value, currentNode.value))
                {
                    lastNode.next = currentNode.next;
                    currentNode.next = null;
                    return this;

                }
                else
                {
                    lastNode = currentNode;
                    currentNode = currentNode.next;
                }
            }

            return this;
        }


    }
}
