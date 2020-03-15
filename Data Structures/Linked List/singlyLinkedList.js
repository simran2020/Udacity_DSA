class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let ari = new Node("Ari");
let malcolm = new Node("Malcolm", ari);
let pete = new Node("Pete", malcolm);
let ricky = new Node("Ricky", pete);
let sean = new Node("Sean", ricky);

console.log(sean);

class LinkedList {
  constructor() {
    // the head attribute stores the pointer to the first node in our linked list
    this.head = null;
    this.length = 0;
  }

  insert(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

  remove_value(value) {
    let prevNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        if (prevNode) {
          prevNode.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        currentNode = null;
        this.length--;
        return true;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  iterate() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  search(data) {
    let idx = 0;
    let node = this.head;
    while (node) {
      if (node.data === data) {
        return idx;
      }
      node = node.next;
      idx += 1;
    }
  }
}

let thankUNext = new LinkedList();
thankUNext.insert("Ari");
thankUNext.insert("Malcolm");
thankUNext.insert("Pete");
thankUNext.insert("Ricky");
thankUNext.insert("Sean");

thankUNext.remove_value("Ricky");

console.log(thankUNext.search("Malcolm"));
