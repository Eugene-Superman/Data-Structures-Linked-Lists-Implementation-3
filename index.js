// add a method insert() to the linked list that adds a node to the specified index.

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value) {
    //Code here
    let currentIndex = 0;
    let currendNode = this.head

    if (index === 0) {
      this.prepend(value)
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value)
      return this.printList();
    }


    while (currentIndex < index) {

      if (currentIndex + 1 === index) {
        currendNode.next = {
          value: value,
          next: currendNode.next
        }
        this.length++;
      } else {
        currendNode = currendNode.next;
      }

      currentIndex++;
    }

    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.insert(0, 13)
myLinkedList.printList()