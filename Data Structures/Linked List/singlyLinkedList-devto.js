function Node(value) {
  return {
    value,
    next: null
  };
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // helper method which returns true if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Will print the nodes in the list, solely meant for debugging purpose
  printList() {
    const nodes = [];
    let current = this.head;

    while (current) {
      nodes.push(current.value);
      current = current.next;
    }

    return nodes.join("->");
  }

  push(value) {
    const node = Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const nodeToRemove = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    }

    let currentNode = this.head;
    let secondToLastNode;

    // start at the front and iterate until
    // we find the second to last node
    while (currentNode) {
      if (currentNode.next === this.tail) {
        // Move the pointer for the second to last Node
        secondToLastNode = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }

    // Pop off that node
    secondToLastNode.next = null;
    // Move the tail to the second to last node
    this.tail = secondToLastNode;
    this.length--;

    // Initialized to this.tail
    return nodeToRemove;
  }

  /**
   * Our get method must check for three situations:

    - The index requested is outside the bounds of the list
    - The list is empty
    - We’re requesting the first element
   */

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    let current = this.head;
    let iterator = 0;

    while (iterator < index) {
      iterator++;
      current = current.next;
    }

    return current;
  }

  /**
   *  
   *  The index we want to delete is outside the bounds of the list
      The list is empty
      We want to delete the head
   */

  delete(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      const nodeToDelete = this.head;
      this.head = this.head.next;
      this.length--;
      return nodeToDelete;
    }

    let current = this.head;
    let previous;
    let iterator = 0;

    while (iterator < index) {
      iterator++;
      previous = current;
      current = current.next;
    }

    const nodeToDelete = current;

    // redirect pointer to skip the element we are deleting
    previous.next = current.next;

    // we are at the end
    if (previous.next === null) {
      this.tail = previous;
    }

    this.length--;
    return nodeToDelete;
  }
}
